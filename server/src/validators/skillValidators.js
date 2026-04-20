import { body } from "express-validator";

export const skillValidator = [
  body("name").trim().notEmpty().withMessage("Skill name is required."),
  body("category")
    .isIn(["Frontend", "Backend", "Database", "Tools"])
    .withMessage("Invalid skill category."),
  body("proficiency")
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage("Proficiency must be between 1 and 100."),
];

