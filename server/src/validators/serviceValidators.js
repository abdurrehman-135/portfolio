import { body } from "express-validator";

export const serviceValidator = [
  body("title").trim().notEmpty().withMessage("Title is required."),
  body("shortDescription")
    .trim()
    .notEmpty()
    .withMessage("Short description is required."),
  body("description").trim().notEmpty().withMessage("Description is required."),
  body("features")
    .optional()
    .isArray()
    .withMessage("Features must be provided as an array."),
];

