import { body } from "express-validator";

export const upsertProfileValidator = [
  body("name").trim().notEmpty().withMessage("Name is required."),
  body("title").trim().notEmpty().withMessage("Title is required."),
  body("intro").trim().notEmpty().withMessage("Intro is required."),
  body("about").trim().notEmpty().withMessage("About text is required."),
  body("email").isEmail().withMessage("A valid email is required."),
  body("yearsExperience")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Years of experience must be a number."),
  body("projectCount")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Project count must be a number."),
  body("interests")
    .optional()
    .isArray()
    .withMessage("Interests must be provided as an array."),
];

