import asyncHandler from "../middleware/asyncHandler.js";
import Service from "../models/Service.js";
import { findDocumentOrThrow } from "../utils/crudUtils.js";

export const getServices = asyncHandler(async (_req, res) => {
  const services = await Service.find().sort({ order: 1, createdAt: -1 });
  res.json({ success: true, data: services });
});

export const createService = asyncHandler(async (req, res) => {
  const service = await Service.create(req.body);

  res.status(201).json({
    success: true,
    message: "Service created successfully.",
    data: service,
  });
});

export const updateService = asyncHandler(async (req, res) => {
  await findDocumentOrThrow(Service, req.params.id, "Service");
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json({
    success: true,
    message: "Service updated successfully.",
    data: service,
  });
});

export const deleteService = asyncHandler(async (req, res) => {
  const service = await findDocumentOrThrow(Service, req.params.id, "Service");
  await service.deleteOne();

  res.json({
    success: true,
    message: "Service deleted successfully.",
  });
});

