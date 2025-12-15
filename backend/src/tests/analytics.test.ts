import request from "supertest";
import { app } from "../app"; // Adjust the import path as necessary
import { describe } from "node:test";

describe("GET /api/sales", () => {
  it("returns sales data", async () => {
    const res = await request(app).get("/api/analytics/sales");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
