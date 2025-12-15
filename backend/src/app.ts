import express from "express";
import analyticsRoutes from "./routes/analytics.routes";

const app = express();

app.use("/api/analytics", analyticsRoutes);
app.use(express.json());

export default app;
