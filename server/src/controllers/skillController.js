import asyncHandler from "../middleware/asyncHandler.js";
import Skill from "../models/Skill.js";
import { findDocumentOrThrow } from "../utils/crudUtils.js";

export const getSkills = asyncHandler(async (_req, res) => {
  const skills = await Skill.find().sort({ category: 1, order: 1, name: 1 });
  res.json({ success: true, data: skills });
});

export const createSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.create(req.body);

  res.status(201).json({
    success: true,
    message: "Skill created successfully.",
    data: skill,
  });
});

export const updateSkill = asyncHandler(async (req, res) => {
  await findDocumentOrThrow(Skill, req.params.id, "Skill");
  const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json({
    success: true,
    message: "Skill updated successfully.",
    data: skill,
  });
});

export const deleteSkill = asyncHandler(async (req, res) => {
  const skill = await findDocumentOrThrow(Skill, req.params.id, "Skill");
  await skill.deleteOne();

  res.json({
    success: true,
    message: "Skill deleted successfully.",
  });
});

