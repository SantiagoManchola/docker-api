# Movies API (DevOps Workshop)

A containerized REST API for managing a movies catalog. Built with Node.js, Express, and PostgreSQL. Designed to run consistently across development, testing, and production using Docker and docker-compose.

## Features

- CRUD endpoints:
  - `GET /api/peliculas`
  - `GET /api/peliculas/:id`
  - `POST /api/peliculas`
  - `PUT /api/peliculas/:id`
  - `DELETE /api/peliculas/:id`
- Health endpoints: `GET /api/health`, `GET /api/ready`
- Input validation using Zod
- PostgreSQL schema + optional seed data
- Dockerfile + docker-compose
- Basic tests with Jest + Supertest
- **Docker Hub Image**: `juanalvarez2004/api-peliculas:latest`

---

## System Requirements

- Docker 20+
- Docker Compose v2+
- (Optional) Node.js 20+ if you want to run locally without Docker

---

## Quickstart (Docker)

### Option 1: Development (Clone repository)

```bash
# 1) Clone
git clone https://github.com/SantiagoManchola/docker-api.git api-peliculas
cd api-peliculas

# 2) (Optional) copy env
cp .env.example .env

# 3) Up the stack
docker-compose up --build
```

### Option 2: Production (Using Docker Hub image)

If you just want to run the application without cloning the repository:

```bash
# 1) Create a directory for the project
mkdir api-peliculas
cd api-peliculas

# 2) Download the docker-compose file
curl -O https://raw.githubusercontent.com/SantiagoManchola/docker-api/main/docker-compose.yml

# 3) Download the database files
mkdir db
curl -o db/schema.sql https://raw.githubusercontent.com/SantiagoManchola/docker-api/main/db/schema.sql
curl -o db/seed.sql https://raw.githubusercontent.com/SantiagoManchola/docker-api/main/db/seed.sql

# 4) Run the application
docker-compose up -d
```

The API will be available at: http://localhost:3000

To stop the application:
```bash
docker-compose down
```
