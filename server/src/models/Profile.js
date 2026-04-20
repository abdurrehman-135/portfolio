import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    availability: {
      type: String,
      default: "Available for new projects",
    },
    intro: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      default: "Remote / Global",
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      default: "+00 123 456 789",
    },
    resumeUrl: String,
    githubUrl: String,
    linkedinUrl: String,
    twitterUrl: String,
    heroImageUrl: String,
    yearsExperience: {
      type: Number,
      default: 5,
    },
    projectCount: {
      type: Number,
      default: 24,
    },
    educationLabel: {
      type: String,
      default: "B.S. Computer Science",
    },
    interests: {
      type: [String],
      default: ["Scalable Systems", "Product Design", "Performance"],
    },
  },
  { timestamps: true },
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;

