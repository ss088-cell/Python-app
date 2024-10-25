function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('JSON Tools')
      .addItem('Import JSON Data', 'promptForJsonData')
      .addToUi();
}

function promptForJsonData() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('Enter your JSON data:');
  
  if (response.getSelectedButton() === ui.Button.OK) {
    const jsonData = response.getResponseText();
    parseJsonData(jsonData);
  } else {
    ui.alert('No JSON data was provided.');
  }
}

function parseJsonData(jsonData) {
  try {
    const parsedData = JSON.parse(jsonData);
    
    // Navigate to the "nodes" array
    const nodes = parsedData.data.nodes;
    if (!Array.isArray(nodes)) {
      throw new Error('Expected "nodes" to be an array.');
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.clear(); // Clear existing content

    // Extract headers from the first node's keys
    const headers = ['Data', 'Data We Need', 'Resource Data We Need'];
    sheet.appendRow(headers); // Append headers

    nodes.forEach(node => {
      const row = [
        node.data,
        node['data we need'],
        node.resources['data we need']  // Access nested resources
      ];
      sheet.appendRow(row); // Append each node as a row
    });

    SpreadsheetApp.getUi().alert('Data successfully imported!');
  } catch (error) {
    SpreadsheetApp.getUi().alert('Error parsing JSON: ' + error.message);
  }
}

