import { Router } from "express";
import User from "../db/models/user.js";
import jwt from "jsonwebtoken";
import { authenticate } from "../middlewares/auth.js";
import { checkRole } from "../middlewares/checkRole.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }
  try {
    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (existingUser !== null) {
      return res.status(409).json({
        message: "The user with this e-mail has already exist",
      });
    }

    await User.create({
      email,
      password,
    });
    res.status(201).json({
      message: "User has been created",
    });
  } catch {
    res.status(500).json({
      message: "something wrong",
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res.status(400).json({
        message: "Bad request",
      });

    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.json({
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/change-password", authenticate, async (req, res) => {
  const { newPassword } = req.body;

  if (!newPassword) {
    return res.status(400).json({
      message: "New password is required",
    });
  }
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found here",
      });
    }
    user.password = newPassword;
    user.mustChangePassword = false;
    await user.save();
    return res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/delete-account", authenticate, async (req, res) => {
  const { currentPassword } = req.body;
  if (!currentPassword) {
    return res.status(400).json({
      message: "Current password is required",
    });
  }
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const isPasswordValid = await user.comparePassword(currentPassword);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    await user.destroy();
    return res.status(200).json({
      message: "Account deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/admin", authenticate, checkRole, (req, res) => {
  return res.status(200).json({
    message: "Welcome, admin!",
  });
});

router.post("/change-email", authenticate, async (req, res) => {
  const { newEmail, currentPassword } = req.body;

  if (!newEmail || !currentPassword) {
    return res.status(400).json({
      message: "New email and current password are required",
    });
  }
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found here",
      });
    }
    const isPasswordValid = await user.comparePassword(currentPassword);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    const existingUser = await User.findOne({
      where: {
        email: newEmail,
      },
    });
    if (existingUser) {
      return res.status(409).json({
        message: "Email is already in use",
      });
    }

    user.email = newEmail;

    await user.save();
    return res.status(200).json({
      message: "Email changed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
