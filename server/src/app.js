import cors from "cors";
import express from "express";
import morgan from "morgan";
import path from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";

import routes from "./routes/index.js";
import { errorHandler, notFoundHandler } from "./middleware/errorMiddleware.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("CORS origin not allowed."));
    },
  }),
);
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "API is healthy" });
});

app.use("/api", routes);

const clientDistPath = path.resolve(__dirname, "../../client/dist");

if (process.env.NODE_ENV === "production" && existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
