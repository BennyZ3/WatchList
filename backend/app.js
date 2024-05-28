const express = require("express");
const cors = require("cors");
const { sampleData } = require("./sample");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (request, response) => {
  response.status(200).json({ data: "Service is running" });
});

app.get("/test", (request, response) => {
  response.status(200).json({ data: sampleData });
});

// TODO: remove after frontend error testing
app.get("/error", (request, response) => {
  console.log("Error route");
  response.status(400).json({ error: "Error route" });
});

module.exports = app;
