import { body } from "express-validator";

export const messageValidator = [
  body("name").trim().notEmpty().withMessage("Name is required."),
  body("email").isEmail().withMessage("A valid email is required."),
  body("subject").trim().notEmpty().withMessage("Subject is required."),
  body("message")
    .trim()
    .isLength({ min: 10 })
    .withMessage("Message must be at least 10 characters long."),
];

export const messageStatusValidator = [
  body("status")
    .isIn(["new", "read", "replied"])
    .withMessage("Status must be new, read, or replied."),
];

