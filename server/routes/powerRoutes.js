import express from "express";
import { getPowerData } from "../controllers/powerController.js";

const router = express.Router();

router.get("/", getPowerData);

export default router;