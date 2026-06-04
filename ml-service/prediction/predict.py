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

TECH_ROLES = {
    "Backend Developer",
    "Full Stack Developer",
    "Java Developer",
    "Python Developer",
    "Go Developer",
    "Node.js Developer",
    "React Developer",
    "Angular Developer",
    "Mobile App Developer",
    "Android Developer",
    "iOS Developer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Site Reliability Engineer (SRE)",
    "Data Analyst",
    "Data Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Cybersecurity Analyst",
    "QA Engineer",
    "Automation Tester",
    "System Administrator",
    "Network Engineer",
    "UI/UX Designer",
    "Product Designer",
    "Game Developer",
    "Blockchain Developer",
    "Embedded Engineer",
}

NON_TECH_ROLES = {
    "Business Analyst",
    "Product Manager",
    "Project Manager",
    "Operations Manager",
    "HR Executive",
    "HR Manager",
    "Talent Acquisition Specialist",
    "Recruiter",
    "Training Coordinator",
    "Customer Success Manager",
    "Administrative Assistant",
    "Executive Assistant",
    "Office Manager",
    "Content Writer",
    "Technical Writer",
    "Research Analyst",
    "Legal Associate",
    "Consultant",
    "Financial Analyst",
    "Accountant",
    "Auditor",
}

SALES_MARKETING_ROLES = {
    "Sales Executive",
    "Sales Manager",
    "Business Development Executive",
    "Business Development Manager",
    "Inside Sales Representative",
    "Account Executive",
    "Account Manager",
    "Marketing Executive",
    "Digital Marketing Specialist",
    "SEO Specialist",
    "SEM Specialist",
    "Social Media Manager",
    "Brand Manager",
    "Growth Marketer",
    "Email Marketing Specialist",
    "Market Research Analyst",
    "Advertising Specialist",
}

CATEGORY_SKILLS = {
    "tech": {
        "project",
        "api",
        "database",
        "testing",
        "git",
        "cloud",
        "security",
        "python",
        "javascript",
        "sql",
    },
    "non_tech": {
        "analysis",
        "stakeholder",
        "management",
        "reporting",
        "operations",
        "communication",
        "planning",
        "process",
        "research",
        "documentation",
    },
    "sales_marketing": {
        "sales",
        "marketing",
        "lead generation",
        "crm",
        "campaign",
        "seo",
        "social media",
        "analytics",
        "customer",
        "revenue",
    },
}


def normalize(text):
    return re.sub(r"\s+", " ", text.lower()).strip()


def get_role_skills(job_role):
    if job_role in ROLE_SKILLS:
        return ROLE_SKILLS[job_role]
    if job_role in TECH_ROLES:
        return CATEGORY_SKILLS["tech"]
    if job_role in NON_TECH_ROLES:
        return CATEGORY_SKILLS["non_tech"]
    if job_role in SALES_MARKETING_ROLES:
        return CATEGORY_SKILLS["sales_marketing"]
    return ROLE_SKILLS["Software Engineer"]


def predict_resume(resume_text, job_role):
    text = normalize(resume_text)
    required_skills = get_role_skills(job_role)

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
