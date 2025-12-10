import express, { Application } from "express";
import cors from "cors";
import searchRoutes from "./routes/searchRoutes";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Restaurant service is running",
    timestamp: new Date().toISOString(),
  });
});

app.use("/search", searchRoutes);

export default app;
