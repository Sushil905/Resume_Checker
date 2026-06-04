from pathlib import Path

import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline


def train_demo_model():
    resumes = [
        "python pandas numpy machine learning model sql",
        "react javascript html css responsive frontend api",
        "node javascript api docker sql testing git",
    ]
    labels = ["Data Scientist", "Frontend Developer", "Software Engineer"]

    model = Pipeline(
        [
            ("tfidf", TfidfVectorizer()),
            ("classifier", LogisticRegression()),
        ]
    )
    model.fit(resumes, labels)

    output = Path("trained_models/resume_model.pkl")
    output.parent.mkdir(exist_ok=True)
    joblib.dump(model, output)
    return output


if __name__ == "__main__":
    print(f"Saved model to {train_demo_model()}")
