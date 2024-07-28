import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
import notesRoute from "./src/routes/notesRoutes.js";
import profileroute from "./src/routes/profileRoutes.js";
import newsRoutes from "./src/routes/newsRoutes.js";
import jobRoutes from "./src/routes/jobRoutes.js";
import cookieParser from "cookie-parser";

const app = express();

// Configure environment
dotenv.config();

// Database configuration
connectDB();

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://www.College_Collab.com"
      : "http://localhost:5173",
  credentials: true,
};

// Middleware setup
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoute);
app.use("/api/profile", profileroute);
app.use("/api/news", newsRoutes);
app.use("/api/job", jobRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
  // Ensure error.field is defined to avoid errors in the message
  const message = error.field
    ? `This is the unexpected field -> ${error.field}`
    : "An unexpected error occurred";
  return res.status(500).send(message);
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});