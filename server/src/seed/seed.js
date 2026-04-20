import "dotenv/config";

import connectDB from "../config/db.js";
import Experience from "../models/Experience.js";
import Message from "../models/Message.js";
import Profile from "../models/Profile.js";
import Project from "../models/Project.js";
import Service from "../models/Service.js";
import Skill from "../models/Skill.js";
import User from "../models/User.js";
import {
  experienceData,
  messageData,
  profileData,
  projectData,
  serviceData,
  skillData,
} from "./seedData.js";
import { fetchGithubProjects } from "./githubProjects.js";

const seedDatabase = async () => {
  try {
    await connectDB();

    await Promise.all([
      User.deleteMany(),
      Profile.deleteMany(),
      Project.deleteMany(),
      Skill.deleteMany(),
      Experience.deleteMany(),
      Service.deleteMany(),
      Message.deleteMany(),
    ]);

    await User.create({
      name: "Abdur Rehman Ansari",
      email: process.env.ADMIN_EMAIL || "admin@abdurportfolio.dev",
      password: process.env.ADMIN_PASSWORD || "portfolio123",
      role: "admin",
    });

    let resolvedProjects = projectData;

    try {
      const githubProjects = await fetchGithubProjects(
        process.env.GITHUB_USERNAME || "abdurrehman-135",
      );

      if (githubProjects.length) {
        resolvedProjects = githubProjects;
      }
    } catch (error) {
      console.warn("GitHub project sync failed, using fallback seed data:", error.message);
    }

    await Promise.all([
      Profile.create({
        ...profileData,
        githubUrl: `https://github.com/${process.env.GITHUB_USERNAME || "abdurrehman-135"}`,
        projectCount: resolvedProjects.length,
      }),
      Project.insertMany(resolvedProjects),
      Skill.insertMany(skillData),
      Experience.insertMany(experienceData),
      Service.insertMany(serviceData),
      Message.insertMany(messageData),
    ]);

    console.log("Database seeded successfully.");
    console.log(
      `Admin login: ${process.env.ADMIN_EMAIL || "admin@abdurportfolio.dev"} / ${
        process.env.ADMIN_PASSWORD || "portfolio123"
      }`,
    );
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();
