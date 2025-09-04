-- Create movies table
CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  year INT NOT NULL CHECK (year >= 1888 AND year <= EXTRACT(YEAR FROM CURRENT_DATE) + 1),
  director VARCHAR(255) NOT NULL,
  duration INT NOT NULL CHECK (duration > 0), -- minutes
  rating NUMERIC(3,1) NOT NULL CHECK (rating >= 0 AND rating <= 10),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Trigger to update updated_at
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_set_updated_at ON movies;
CREATE TRIGGER trg_set_updated_at
BEFORE UPDATE ON movies
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
