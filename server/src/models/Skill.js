import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Frontend", "Backend", "Database", "Tools"],
    },
    proficiency: {
      type: Number,
      min: 1,
      max: 100,
      default: 75,
    },
    icon: {
      type: String,
      default: "code-slash",
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;

