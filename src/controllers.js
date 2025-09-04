import { query } from "./db.js";
import { parseMoviePayload } from "./validations.js";

export async function listMovies(req, res) {
  try {
    const { rows } = await query("SELECT * FROM movies ORDER BY id ASC");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "internal_error" });
  }
}

export async function getMovie(req, res) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: "invalid_id" });
    const { rows } = await query("SELECT * FROM movies WHERE id = $1", [id]);
    if (rows.length === 0) return res.status(404).json({ error: "not_found" });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "internal_error" });
  }
}

export async function createMovie(req, res) {
  try {
    const data = parseMoviePayload(req.body);
    const insert = `INSERT INTO movies (name, category, year, director, duration, rating)
       VALUES ($1,$2,$3,$4,$5,$6)
       RETURNING *`;
    const params = [
      data.name,
      data.category,
      data.year,
      data.director,
      data.duration,
      data.rating,
    ];
    const { rows } = await query(insert, params);
    res.status(201).json(rows[0]);
  } catch (err) {
    if (err.name === "ZodError") {
      return res
        .status(400)
        .json({ error: "validation_error", details: err.errors });
    }
    console.error(err);
    res.status(500).json({ error: "internal_error" });
  }
}

export async function updateMovie(req, res) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: "invalid_id" });
    const data = parseMoviePayload(req.body);

    const update = `UPDATE movies SET name=$1, category=$2, year=$3, director=$4, duration=$5, rating=$6
       WHERE id=$7 RETURNING *`;
    const params = [
      data.name,
      data.category,
      data.year,
      data.director,
      data.duration,
      data.rating,
      id,
    ];
    const { rows } = await query(update, params);
    if (rows.length === 0) return res.status(404).json({ error: "not_found" });
    res.json(rows[0]);
  } catch (err) {
    if (err.name === "ZodError") {
      return res
        .status(400)
        .json({ error: "validation_error", details: err.errors });
    }
    console.error(err);
    res.status(500).json({ error: "internal_error" });
  }
}

export async function deleteMovie(req, res) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: "invalid_id" });
    const { rowCount } = await query("DELETE FROM movies WHERE id=$1", [id]);
    if (rowCount === 0) return res.status(404).json({ error: "not_found" });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "internal_error" });
  }
}
