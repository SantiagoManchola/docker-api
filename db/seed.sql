INSERT INTO movies (name, category, year, director, duration, rating) VALUES
('Inception', 'Sci-Fi', 2010, 'Christopher Nolan', 148, 8.8),
('Spirited Away', 'Animation', 2001, 'Hayao Miyazaki', 125, 8.6),
('The Godfather', 'Crime', 1972, 'Francis Ford Coppola', 175, 9.2)
ON CONFLICT DO NOTHING;
