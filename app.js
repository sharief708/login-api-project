const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    return res.json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

app.listen(3000, () => {
  console.log("Login API feature branch update");
  console.log("Login API update for PR");
  console.log("CI pipeline test");
});