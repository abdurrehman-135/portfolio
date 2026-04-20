import jwt from "jsonwebtoken";

import User from "../models/User.js";
import asyncHandler from "./asyncHandler.js";

export const protect = asyncHandler(async (req, _res, next) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  if (!token) {
    const error = new Error("Not authorized. Missing token.");
    error.statusCode = 401;
    throw error;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      const error = new Error("Not authorized. User not found.");
      error.statusCode = 401;
      throw error;
    }

    req.user = user;
    next();
  } catch (error) {
    error.statusCode = 401;
    error.message = "Invalid or expired token.";
    throw error;
  }
});

export const adminOnly = (req, _res, next) => {
  if (!req.user || req.user.role !== "admin") {
    const error = new Error("Admin access required.");
    error.statusCode = 403;
    throw error;
  }

  next();
};

