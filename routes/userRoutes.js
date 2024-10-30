import express from "express";
import { createUser } from "../controllers/userControllers.js";

const router = express.Router();

//Create new user
//http://localhost:5000/api/submit/
router.post("/", createUser);

export default router;
