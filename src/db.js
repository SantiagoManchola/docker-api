import pg from "pg";

const {
  DB_HOST = "localhost",
  DB_PORT = "5432",
  DB_USER = "postgres",
  DB_PASSWORD = "postgres",
  DB_NAME = "peliculas",
  DB_SSL = "false",
} = process.env;

export const pool = new pg.Pool({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  ssl: DB_SSL === "true" ? { rejectUnauthorized: false } : false,
});

// helper for queries
export const query = (text, params) => pool.query(text, params);
