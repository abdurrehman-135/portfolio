import asyncHandler from "../middleware/asyncHandler.js";
import Profile from "../models/Profile.js";

export const getProfile = asyncHandler(async (_req, res) => {
  const profile = await Profile.findOne().sort({ createdAt: -1 });

  if (!profile) {
    const error = new Error("Profile has not been configured yet.");
    error.statusCode = 404;
    throw error;
  }

  res.json({ success: true, data: profile });
});

export const upsertProfile = asyncHandler(async (req, res) => {
  const existingProfile = await Profile.findOne();

  const profile = existingProfile
    ? await Profile.findByIdAndUpdate(existingProfile._id, req.body, {
        new: true,
        runValidators: true,
      })
    : await Profile.create(req.body);

  res.json({
    success: true,
    message: "Profile updated successfully.",
    data: profile,
  });
});

