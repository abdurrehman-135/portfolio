import { Router } from "express";

import { getProfile, upsertProfile } from "../controllers/profileController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import validateRequest from "../middleware/validateRequest.js";
import { upsertProfileValidator } from "../validators/profileValidators.js";

const router = Router();

router.get("/", getProfile);
router.put("/", protect, adminOnly, upsertProfileValidator, validateRequest, upsertProfile);

export default router;

