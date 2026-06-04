import re


ROLE_SKILLS = {
    "Software Engineer": {
        "python",
        "javascript",
        "react",
        "node",
        "sql",
        "git",
        "api",
        "docker",
        "testing",
    },
    "Data Scientist": {
        "python",
        "pandas",
        "numpy",
        "machine learning",
        "sql",
        "statistics",
        "scikit-learn",
        "model",
        "visualization",
    },
    "Frontend Developer": {
        "html",
        "css",
        "javascript",
        "react",
        "vite",
        "api",
        "responsive",
        "accessibility",
    },
}


def normalize(text):
    return re.sub(r"\s+", " ", text.lower()).strip()


def predict_resume(resume_text, job_role):
    text = normalize(resume_text)
    required_skills = ROLE_SKILLS.get(job_role, ROLE_SKILLS["Software Engineer"])

    matched = sorted(skill for skill in required_skills if skill in text)
    missing = sorted(required_skills - set(matched))
    score = round((len(matched) / len(required_skills)) * 100)

    if score >= 75:
        category = "Strong Match"
    elif score >= 45:
        category = "Moderate Match"
    else:
        category = "Needs Improvement"

    return {
        "jobRole": job_role,
        "score": score,
        "category": category,
        "matchedSkills": matched,
        "missingSkills": missing,
        "summary": build_summary(score, matched, missing),
    }


def build_summary(score, matched, missing):
    if score >= 75:
        return "Resume has strong alignment with the selected role."
    if matched:
        return "Resume has useful overlap, but a few important skills are missing."
    return "Resume needs more role-specific keywords and project evidence."
