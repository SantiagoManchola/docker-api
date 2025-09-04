import request from "supertest";
import app from "../src/index.js";

describe("Películas API", () => {
  it("GET /api/health should return ok", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});
