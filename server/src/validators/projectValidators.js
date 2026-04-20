import { body } from "express-validator";

export const projectValidator = [
  body("title").trim().notEmpty().withMessage("Project title is required."),
  body("category").trim().notEmpty().withMessage("Category is required."),
  body("description").trim().notEmpty().withMessage("Description is required."),
  body("technologies")
    .isArray({ min: 1 })
    .withMessage("At least one technology is required."),
  body("githubUrl")
    .optional({ values: "falsy" })
    .isURL()
    .withMessage("GitHub URL must be valid."),
  body("liveUrl")
    .optional({ values: "falsy" })
    .isURL()
    .withMessage("Live demo URL must be valid."),
  body("imageUrl")
    .optional({ values: "falsy" })
    .isURL()
    .withMessage("Image URL must be valid."),
  body("status")
    .optional()
    .isIn(["Live", "In Review", "Draft"])
    .withMessage("Status is invalid."),
];

