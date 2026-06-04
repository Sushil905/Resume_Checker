import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.DB_HOST || "mysql",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "resume_user",
  password: process.env.DB_PASSWORD || "resume_pass",
  database: process.env.DB_NAME || "resume_screening",
  waitForConnections: true,
  connectionLimit: 10
});

export async function pingDatabase() {
  const [rows] = await db.query("SELECT 1 AS ok");
  return rows[0]?.ok === 1;
}
