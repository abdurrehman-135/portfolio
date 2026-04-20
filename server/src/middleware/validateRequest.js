import { validationResult } from "express-validator";

const validateRequest = (req, _res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.statusCode = 422;
    error.details = errors.array();
    throw error;
  }

  next();
};

export default validateRequest;

