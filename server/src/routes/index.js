import { Router } from "express";

import authRoutes from "./authRoutes.js";
import experienceRoutes from "./experienceRoutes.js";
import messageRoutes from "./messageRoutes.js";
import profileRoutes from "./profileRoutes.js";
import projectRoutes from "./projectRoutes.js";
import serviceRoutes from "./serviceRoutes.js";
import skillRoutes from "./skillRoutes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);
router.use("/projects", projectRoutes);
router.use("/skills", skillRoutes);
router.use("/experiences", experienceRoutes);
router.use("/services", serviceRoutes);
router.use("/messages", messageRoutes);

export default router;

