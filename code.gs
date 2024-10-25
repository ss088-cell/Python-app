function fetchAndPopulateData() {
  const url = 'http://<your-flask-app-url>/generate-report'; // Replace with your actual URL
  const response = UrlFetchApp.fetch(url); // Fetch data from the Flask API
  const jsonData = JSON.parse(response.getContentText()); // Parse the JSON response

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); // Get the active sheet
  sheet.clear(); // Clear any existing data in the sheet
  
  // Write headers based on the keys of the first object
  const headers = Object.keys(jsonData[0]); // Get headers from the first object
  sheet.appendRow(headers); // Append headers to the first row
  
  // Loop through the data and append each row to the sheet
  jsonData.forEach(item => {
    const row = headers.map(header => item[header]); // Create a row from the item
    sheet.appendRow(row); // Append the row to the sheet
  });

  Logger.log('Data imported successfully!'); // Log success message
}
