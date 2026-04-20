import { Router } from "express";

import {
  createService,
  deleteService,
  getServices,
  updateService,
} from "../controllers/serviceController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import validateRequest from "../middleware/validateRequest.js";
import { idParamValidator } from "../validators/commonValidators.js";
import { serviceValidator } from "../validators/serviceValidators.js";

const router = Router();

router.get("/", getServices);
router.post("/", protect, adminOnly, serviceValidator, validateRequest, createService);
router.put(
  "/:id",
  protect,
  adminOnly,
  idParamValidator,
  serviceValidator,
  validateRequest,
  updateService,
);
router.delete("/:id", protect, adminOnly, idParamValidator, validateRequest, deleteService);

export default router;

