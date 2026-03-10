const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Login API
app.post("/login", (req, res) => {

  const { username, password } = req.body;

  // simple authentication
  if (username === "admin" && password === "1234") {
    return res.status(200).json({
      status: "success",
      message: "Login successful"
    });
  }

  return res.status(401).json({
    status: "error",
    message: "Invalid username or password"
  });

});

// Health check API
app.get("/", (req, res) => {
  res.send("Login API is running");
});

module.exports = app;