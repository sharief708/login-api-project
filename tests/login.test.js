const request = require("supertest");
const express = require("express");

const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    return res.json({ message: "Login successfully" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

test("Login success", async () => {
  const response = await request(app)
    .post("/login")
    .send({ username: "admin", password: "1234" });

  if (response.status !== 200) {
    throw new Error("Test failed");
  }
});