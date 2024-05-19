const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Controllers

// Health check route
app.get("/", (request, response) => {
  response.status(200).json({ data: "Service is running" });
});

module.exports = app;
