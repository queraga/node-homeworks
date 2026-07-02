import User from "../db/models/user.js";

export async function checkRole(req, res, next) {
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Not permitted",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
