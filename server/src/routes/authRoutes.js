import { Router } from "express";

import { getCurrentUser, loginAdmin } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import validateRequest from "../middleware/validateRequest.js";
import { loginValidator } from "../validators/authValidators.js";

const router = Router();

router.post("/login", loginValidator, validateRequest, loginAdmin);
router.get("/me", protect, getCurrentUser);

export default router;

