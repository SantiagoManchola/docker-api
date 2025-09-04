import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes.js";
import { pool } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", router);

const PORT = process.env.PORT || 3000;

async function start() {
  // simple check DB connectivity on boot (logs only)
  try {
    await pool.query("SELECT 1");
    console.log("[DB] Connected");
  } catch (e) {
    console.error("[DB] Connection failed:", e.message);
  }

  app.listen(PORT, () => {
    console.log(`API listening on http://0.0.0.0:${PORT}`);
  });
}

start();

export default app; // for tests
