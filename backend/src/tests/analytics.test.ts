import request from "supertest";
import { app } from "../app";
import { describe } from "node:test";

describe("GET /api/analytics/sales", () => {
  it("returns sales data", async () => {
    const res = await request(app).get("/api/analytics/sales");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
