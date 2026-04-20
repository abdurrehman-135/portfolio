import { Router } from "express";

import {
  createMessage,
  getMessages,
  updateMessageStatus,
} from "../controllers/messageController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import validateRequest from "../middleware/validateRequest.js";
import { idParamValidator } from "../validators/commonValidators.js";
import {
  messageStatusValidator,
  messageValidator,
} from "../validators/messageValidators.js";

const router = Router();

router.post("/", messageValidator, validateRequest, createMessage);
router.get("/", protect, adminOnly, getMessages);
router.patch(
  "/:id/status",
  protect,
  adminOnly,
  idParamValidator,
  messageStatusValidator,
  validateRequest,
  updateMessageStatus,
);

export default router;

