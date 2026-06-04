# AI Resume Checker

AI Resume Checker is a GenAI + Machine Learning + Full Stack web application for resume analysis, ATS scoring, career preparation, job tracking, productivity planning, and document intelligence.

The project is built like a real SaaS-style dashboard with separate web routes for every module, a React frontend, Express backend, Flask ML service, MySQL database, Docker setup, JWT authentication, resume upload support, and AI-powered productivity workflows.

## Project Highlights

- GenAI-powered resume insights, interview questions, task planning, notes summaries, and PDF assistant responses.
- ML service for resume text extraction, skill matching, ATS-style scoring, and role-based analysis.
- Full-stack architecture with React, Express, Flask, MySQL, JWT auth, and Docker Compose.
- Dedicated app routes such as `/dashboard`, `/resume-checker`, `/ats-score`, `/interview-prep`, `/job-tracker`, and `/ai-assistant`.
- MySQL persistence for users, tasks, notes, goals, resume screenings, PDF documents, and interview sessions.
- Fallback AI logic works without an API key; OpenAI integration can be enabled with environment variables.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React, Vite, Axios, Framer Motion |
| Backend | Node.js, Express.js, JWT, Multer, MySQL2 |
| ML Service | Python, Flask, PDF/DOCX text extraction, rule-based ML fallback |
| Database | MySQL 8 |
| AI / GenAI | OpenAI-ready service with local fallback generators |
| DevOps | Docker, Docker Compose |

## Application Routes

### Core

- `/dashboard`

### Resume Analysis

- `/resume-checker`
- `/ats-score`
- `/skills-analysis`
- `/keyword-optimizer`

### Career Tools

- `/cover-letter`
- `/resume-builder`
- `/resume-versions`
- `/portfolio-analyzer`

### Job Preparation

- `/interview-prep`
- `/career-roadmap`
- `/learning-hub`

### Job Tracking

- `/job-match`
- `/job-tracker`

### Analytics

- `/analytics`
- `/market-insights`

### AI Tools

- `/ai-assistant`
- `/rag-pdf`
- `/smart-search`

## Module Workflow

1. User registers or logs in.
2. JWT token is generated and stored by the frontend.
3. User opens a dedicated module route.
4. Frontend sends data to the Express backend.
5. Backend stores structured data in MySQL.
6. Backend calls the AI/ML service layer.
7. AI/ML output is returned to the dashboard.
8. User tracks resume health, job match, tasks, goals, interviews, and insights.

## Features

- User login and registration
- Resume upload and screening
- ATS score dashboard
- Skills analysis
- Keyword optimizer
- Cover letter builder
- Resume builder and versioning UI
- Portfolio analyzer
- Interview preparation
- Career roadmap
- Learning hub
- Job match score
- Job tracker
- Analytics dashboard
- Market insights
- AI task prioritization
- AI task breakdown
- AI daily planner
- AI notes summarizer
- Smart search
- Productivity score
- Goal tracking
- RAG-style PDF assistant

## Project Structure

```text
ai-resume/
├── frontend/      # React + Vite app
├── backend/       # Express API and MySQL orchestration
├── ml-service/    # Flask ML/AI service
├── database/      # SQL schema and seed data
├── docs/          # Architecture and API docs
└── docker-compose.yml
```

## Run With Docker

```bash
docker compose up -d --build
```

Open the app:

```text
http://localhost:5173/dashboard
```

Service ports:

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5099`
- ML service: `http://localhost:8000`
- MySQL: `127.0.0.1:3307`

## MySQL Workbench

Use these credentials:

```text
Hostname: 127.0.0.1
Port: 3307
Username: resume_user
Password: resume_pass
Database: resume_screening
```

Root user:

```text
Username: root
Password: root_pass
```

## Optional GenAI Setup

The project works without an API key using local fallback logic. To enable OpenAI-backed GenAI output:

```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_MODEL="gpt-4.1-mini"
docker compose up -d --build
```

GenAI can produce:

- Candidate summaries
- Recruiter notes
- Resume improvement suggestions
- Interview questions
- Notes summaries
- Daily plans
- Goal targets
- PDF answers

## Local Development

### Backend

```bash
cd backend
npm install
npm run dev
```

### ML Service

```bash
cd ml-service
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Overview

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/productivity/overview`
- `POST /api/productivity/tasks`
- `POST /api/productivity/tasks/:id/breakdown`
- `POST /api/productivity/planner`
- `POST /api/productivity/notes`
- `POST /api/productivity/goals`
- `GET /api/productivity/search`
- `POST /api/productivity/interview`
- `POST /api/productivity/pdf`
- `POST /api/resumes/screen`

## Future Improvements

- Add vector database storage for real RAG retrieval.
- Add recruiter/admin dashboard.
- Add charts for resume history, productivity score, and job pipeline.
- Train a stronger resume classifier on a labeled dataset.
- Add downloadable cover letters and resume versions.
- Add GitHub/LinkedIn portfolio integrations.

