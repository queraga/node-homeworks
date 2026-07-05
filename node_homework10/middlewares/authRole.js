import { users } from "../users.js";

export function authorizeRole(req, res, next) {
  const user = users.find((user) => user.id === req.userId);
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
}
