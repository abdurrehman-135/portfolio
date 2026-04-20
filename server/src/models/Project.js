import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
      default: [],
    },
    githubUrl: String,
    liveUrl: String,
    imageUrl: String,
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["Live", "In Review", "Draft"],
      default: "Live",
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Project = mongoose.model("Project", projectSchema);

export default Project;

