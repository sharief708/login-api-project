const request = require("supertest");
const app = require("../src/app");

describe("Login API Test", () => {

  test("Login should succeed with correct credentials", async () => {

    const response = await request(app)
      .post("/login")
      .send({
        username: "admin",
        password: "1234"
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Login successful");

  });

  test("Login should fail with wrong credentials", async () => {

    const response = await request(app)
      .post("/login")
      .send({
        username: "admin",
        password: "wrong"
      });

    expect(response.statusCode).toBe(401);

  });

});