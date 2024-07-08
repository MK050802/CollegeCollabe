import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js"
import cors from "cors";

//configure env
dotenv.config(); 

//databse config
connectDB();//for connectin through the db .js file 

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/auth",authRoutes);
//rest api 
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to Engineering adda app</h1>");
// });


//PORT
const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});