import { Router } from "express";

import {
  createSkill,
  deleteSkill,
  getSkills,
  updateSkill,
} from "../controllers/skillController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import validateRequest from "../middleware/validateRequest.js";
import { idParamValidator } from "../validators/commonValidators.js";
import { skillValidator } from "../validators/skillValidators.js";

const router = Router();

router.get("/", getSkills);
router.post("/", protect, adminOnly, skillValidator, validateRequest, createSkill);
router.put(
  "/:id",
  protect,
  adminOnly,
  idParamValidator,
  skillValidator,
  validateRequest,
  updateSkill,
);
router.delete("/:id", protect, adminOnly, idParamValidator, validateRequest, deleteSkill);

export default router;

