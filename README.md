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

---

## System Requirements

- Docker 20+
- Docker Compose v2+
- (Optional) Node.js 20+ if you want to run locally without Docker

---

## Quickstart (Docker)

```bash
# 1) Clone
git clone <your-repo-url> api-peliculas
cd api-peliculas

# 2) (Optional) copy env
cp .env.example .env

# 3) Up the stack
docker-compose up --build
```
