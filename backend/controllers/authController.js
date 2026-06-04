import bcrypt from "bcryptjs";
import { db } from "../config/db.js";
import { signUserToken } from "../middleware/auth.js";

export async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "Name, email, and password are required" });
      return;
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await db.execute(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [name, email, passwordHash]
    );

    const [[user]] = await db.execute(
      "SELECT id, name, email FROM users WHERE email = ?",
      [email]
    );

    res.status(201).json({ user, token: signUserToken(user) });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res.status(409).json({ message: "Email is already registered" });
      return;
    }
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const [[user]] = await db.execute(
      "SELECT id, name, email, password_hash FROM users WHERE email = ?",
      [email]
    );

    if (!user || !(await bcrypt.compare(password || "", user.password_hash))) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    res.json({
      user: { id: user.id, name: user.name, email: user.email },
      token: signUserToken(user)
    });
  } catch (error) {
    next(error);
  }
}
