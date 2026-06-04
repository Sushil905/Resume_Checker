from flask import Flask, jsonify, request
from flask_cors import CORS

from prediction.predict import predict_resume
from preprocessing.extract_text import extract_text

app = Flask(__name__)
CORS(app)


@app.get("/health")
def health():
    return jsonify({"status": "ok", "service": "ml-service"})


@app.post("/predict")
def predict():
    if "resume" not in request.files:
        return jsonify({"message": "Resume file is required"}), 400

    resume_file = request.files["resume"]
    job_role = request.form.get("jobRole", "Software Engineer")
    resume_text = extract_text(resume_file)

    if not resume_text.strip():
        return jsonify({"message": "Could not read text from resume"}), 422

    return jsonify(predict_resume(resume_text, job_role))


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
