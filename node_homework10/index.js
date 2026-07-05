import express from "express";
import dotenv from "dotenv";
import { users } from "./users.js";
import jwt from "jsonwebtoken";
import { authenticateJWT } from "./middlewares/auth.js";
import bcrypt from "bcryptjs";
import { authorizeRole } from "./middlewares/authRole.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "invalid credentials",
    });
  }
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.json({ token });
});

app.put("/update-email", authenticateJWT, (req, res) => {
  const { newEmail } = req.body;
  if (!newEmail) {
    return res.status(400).json({
      message: "New email required",
    });
  }

  const user = users.find((user) => user.id === req.userId);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  user.email = newEmail;
  return res.status(200).json({
    message: "Email updated successfully",
    user,
  });
});

app.post("/delete-account", authenticateJWT, (req, res) => {
  const user = users.find((user) => user.id === req.userId);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const index = users.findIndex((user) => user.id === req.userId);
  users.splice(index, 1);

  return res.status(200).json({
    message: "Account deleted successfully",
  });
});

app.put("/update-role", authenticateJWT, authorizeRole, (req, res) => {
  const { id, role } = req.body;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  user.role = role;
  return res.status(200).json({
    message: "Role updated successfully",
    user,
  });
});

app.post("/refresh-token", authenticateJWT, (req, res) => {
  const token = jwt.sign(
    {
      id: req.userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
  return res.status(200).json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
