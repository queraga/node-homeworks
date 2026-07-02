import User from "../db/models/user.js";

export async function checkMustChangePassword(req, res, next) {
  try {
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    if (user.mustChangePassword) {
      return res.status(403).json({
        message: "Password change required",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
