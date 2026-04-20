import { Router } from "express";

import {
  createExperience,
  deleteExperience,
  getExperiences,
  updateExperience,
} from "../controllers/experienceController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import validateRequest from "../middleware/validateRequest.js";
import { experienceValidator } from "../validators/experienceValidators.js";
import { idParamValidator } from "../validators/commonValidators.js";

const router = Router();

router.get("/", getExperiences);
router.post("/", protect, adminOnly, experienceValidator, validateRequest, createExperience);
router.put(
  "/:id",
  protect,
  adminOnly,
  idParamValidator,
  experienceValidator,
  validateRequest,
  updateExperience,
);
router.delete(
  "/:id",
  protect,
  adminOnly,
  idParamValidator,
  validateRequest,
  deleteExperience,
);

export default router;

