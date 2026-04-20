import asyncHandler from "../middleware/asyncHandler.js";
import Experience from "../models/Experience.js";
import { findDocumentOrThrow } from "../utils/crudUtils.js";

export const getExperiences = asyncHandler(async (_req, res) => {
  const experiences = await Experience.find().sort({ order: 1, createdAt: -1 });
  res.json({ success: true, data: experiences });
});

export const createExperience = asyncHandler(async (req, res) => {
  const experience = await Experience.create(req.body);

  res.status(201).json({
    success: true,
    message: "Experience item created successfully.",
    data: experience,
  });
});

export const updateExperience = asyncHandler(async (req, res) => {
  await findDocumentOrThrow(Experience, req.params.id, "Experience item");
  const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json({
    success: true,
    message: "Experience item updated successfully.",
    data: experience,
  });
});

export const deleteExperience = asyncHandler(async (req, res) => {
  const experience = await findDocumentOrThrow(
    Experience,
    req.params.id,
    "Experience item",
  );
  await experience.deleteOne();

  res.json({
    success: true,
    message: "Experience item deleted successfully.",
  });
});

