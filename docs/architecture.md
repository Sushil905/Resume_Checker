# Architecture

```text
React Frontend
  |
  | POST /api/resumes/screen
  v
Express Backend
  |
  | POST /predict
  v
Flask ML Service
  |
  | extract text + score skills
  v
Prediction Result
```

The backend is the public API boundary. The ML service stays separate so it can
use Python libraries, training code, and model artifacts without complicating the
Node API.
