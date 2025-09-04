import { Router } from "express";
import {
  listMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from "./controllers.js";

const router = Router();

// Health & readiness
router.get("/health", (req, res) => res.json({ status: "ok" }));
router.get("/ready", (req, res) => res.json({ status: "ready" }));

// Movies CRUD
router.get("/peliculas", listMovies);
router.get("/peliculas/:id", getMovie);
router.post("/peliculas", createMovie);
router.put("/peliculas/:id", updateMovie);
router.delete("/peliculas/:id", deleteMovie);

export default router;
