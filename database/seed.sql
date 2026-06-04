INSERT IGNORE INTO candidates (full_name, email)
VALUES
  ('Demo Candidate', 'demo.candidate@example.com');

INSERT IGNORE INTO users (name, email, password_hash)
VALUES
  ('Demo User', 'demo@example.com', '$2a$10$YjNkEVdRDQltASbqBjkYx.VZyMKhFbZLfN9.BbLJKk6DaYV3V6dNW');
