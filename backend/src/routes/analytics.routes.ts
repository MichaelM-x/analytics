import { Router } from "express";
import { getSalesData } from "../controllers/analytics.controller";

const router = Router();

router.get("/api/sales", getSalesData);

export default router;
