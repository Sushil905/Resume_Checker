export function requireResumeFile(req, _res, next) {
  if (!req.file) {
    const error = new Error("Resume file is required");
    error.status = 400;
    next(error);
    return;
  }

  next();
}
