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


// Configure environment
dotenv.config();

// Database configuration
connectDB();

const app = express();

// Middlewares
app.use((error,req,res,next) => {
   const message = `This is the unexpected field -> ${error.field} `;
   return res.status(500).send(message);
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoute);
app.use("/api/profile", profileroute);
app.use("/api/news",newsRoutes);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
