from flask import Flask, jsonify
import time  # Optional: simulate delay if needed

app = Flask(__name__)

# Example function to generate JSON data
def your_function_that_generates_json():
    # Replace this with your actual logic to generate the JSON response
    # For demonstration, we will return a static list
    return [
        {"Name": "John", "Age": 30, "City": "New York"},
        {"Name": "Anna", "Age": 22, "City": "London"},
        {"Name": "Mike", "Age": 32, "City": "Chicago"}
    ]

@app.route('/generate-report', methods=['GET'])
def generate_report():
    # Optional: simulate report generation time
    time.sleep(2)  # Remove or adjust this as needed

    report_data = your_function_that_generates_json()  # Call your function
    return jsonify(report_data)

if __name__ == '__main__':
    app.run(debug=True)

