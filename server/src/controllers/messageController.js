import asyncHandler from "../middleware/asyncHandler.js";
import Message from "../models/Message.js";
import { findDocumentOrThrow } from "../utils/crudUtils.js";

export const createMessage = asyncHandler(async (req, res) => {
  const message = await Message.create(req.body);

  res.status(201).json({
    success: true,
    message: "Message sent successfully.",
    data: message,
  });
});

export const getMessages = asyncHandler(async (_req, res) => {
  const messages = await Message.find().sort({ status: 1, createdAt: -1 });

  res.json({
    success: true,
    data: messages,
  });
});

export const updateMessageStatus = asyncHandler(async (req, res) => {
  await findDocumentOrThrow(Message, req.params.id, "Message");
  const message = await Message.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true, runValidators: true },
  );

  res.json({
    success: true,
    message: "Message status updated successfully.",
    data: message,
  });
});

