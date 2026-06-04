# API Docs

## Backend

### `GET /health`

Returns backend health status.

### `POST /api/resumes/screen`

Screens a resume for a selected job role.

Request type: `multipart/form-data`

Fields:

- `resume`: PDF, DOC, DOCX, or TXT file.
- `jobRole`: target role, for example `Software Engineer`.

Example response:

```json
{
  "fileName": "resume.pdf",
  "jobRole": "Software Engineer",
  "score": 78,
  "category": "Strong Match",
  "matchedSkills": ["api", "git", "javascript", "react"],
  "missingSkills": ["docker", "testing"],
  "summary": "Resume has strong alignment with the selected role.",
  "genAiInsights": {
    "candidateSummary": "Candidate appears well aligned for Software Engineer.",
    "recruiterNote": "Review project depth before shortlisting.",
    "improvementTips": ["Add a concrete project that demonstrates docker."],
    "interviewQuestions": ["Can you explain a recent project where you used react?"]
  }
}
```

## ML Service

### `GET /health`

Returns ML service health status.

### `POST /predict`

Internal endpoint called by the backend. Accepts the same `resume` and `jobRole`
multipart fields and returns prediction data.
