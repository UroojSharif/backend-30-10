import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/",(req,res)=>{
  res.send("Hello Backend! Today is 30.10.2024")
})

//user route
app.use("/api/submit", userRoute);



//db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("DB connected & Server is running on port:", PORT);
    });
  })
  .catch((err) => {
    "DB connection failed", err;
  });
