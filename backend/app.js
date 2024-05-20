const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (request, response) => {
  response.status(200).json({ data: "Service is running" });
});

// TODO: remove after frontend error testing
app.get("/error", (request, response) => {
  console.log("Error route");
  response.status(400).json({ error: "Error route" });
});

module.exports = app;
