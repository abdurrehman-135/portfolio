import asyncHandler from "../middleware/asyncHandler.js";
import Project from "../models/Project.js";
import { findDocumentOrThrow } from "../utils/crudUtils.js";

export const getProjects = asyncHandler(async (req, res) => {
  const { featured, category, technology } = req.query;
  const filter = {};

  if (featured !== undefined) {
    filter.featured = featured === "true";
  }

  if (category && category !== "All") {
    filter.category = category;
  }

  if (technology && technology !== "All") {
    filter.technologies = technology;
  }

  const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });

  res.json({ success: true, data: projects });
});

export const createProject = asyncHandler(async (req, res) => {
  const project = await Project.create(req.body);

  res.status(201).json({
    success: true,
    message: "Project created successfully.",
    data: project,
  });
});

export const updateProject = asyncHandler(async (req, res) => {
  await findDocumentOrThrow(Project, req.params.id, "Project");
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json({
    success: true,
    message: "Project updated successfully.",
    data: project,
  });
});

export const deleteProject = asyncHandler(async (req, res) => {
  const project = await findDocumentOrThrow(Project, req.params.id, "Project");
  await project.deleteOne();

  res.json({
    success: true,
    message: "Project deleted successfully.",
  });
});

