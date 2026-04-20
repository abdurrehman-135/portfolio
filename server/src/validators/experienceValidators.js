import { body } from "express-validator";

export const experienceValidator = [
  body("title").trim().notEmpty().withMessage("Title is required."),
  body("organization").trim().notEmpty().withMessage("Organization is required."),
  body("period").trim().notEmpty().withMessage("Period is required."),
  body("summary").trim().notEmpty().withMessage("Summary is required."),
  body("type")
    .optional()
    .isIn(["work", "education", "certification"])
    .withMessage("Invalid experience type."),
  body("highlights")
    .optional()
    .isArray()
    .withMessage("Highlights must be provided as an array."),
];

