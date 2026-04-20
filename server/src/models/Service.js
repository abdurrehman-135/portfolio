import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      default: [],
    },
    icon: {
      type: String,
      default: "briefcase",
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;

