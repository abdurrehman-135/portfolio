import { Router } from "express";

import {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
} from "../controllers/projectController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import validateRequest from "../middleware/validateRequest.js";
import { idParamValidator } from "../validators/commonValidators.js";
import { projectValidator } from "../validators/projectValidators.js";

const router = Router();

router.get("/", getProjects);
router.post("/", protect, adminOnly, projectValidator, validateRequest, createProject);
router.put(
  "/:id",
  protect,
  adminOnly,
  idParamValidator,
  projectValidator,
  validateRequest,
  updateProject,
);
router.delete("/:id", protect, adminOnly, idParamValidator, validateRequest, deleteProject);

export default router;

