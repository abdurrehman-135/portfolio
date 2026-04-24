import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    organization: {
      type: String,
      required: true,
      trim: true,
    },
    period: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      default: "Remote",
    },
    type: {
      type: String,
      enum: ["project", "work", "education", "certification"],
      default: "project",
    },
    summary: {
      type: String,
      required: true,
    },
    highlights: {
      type: [String],
      default: [],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
