from flask import Flask, jsonify
import time  # Optional: simulate delay if needed

app = Flask(__name__)

@app.route('/generate-report', methods=['GET'])
def generate_report():
    # Optional: simulate report generation time
    time.sleep(2)  # Remove or adjust this as needed

    # Your existing code that generates the JSON response.
    # For example:
    report_data = your_function_that_generates_json()  # Replace with your function call
    return jsonify(report_data)

if __name__ == '__main__':
    app.run(debug=True)
