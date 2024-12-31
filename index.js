require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/dev", (req, res) => {
  res.send("Hello, Dev");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome to Login in Page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
