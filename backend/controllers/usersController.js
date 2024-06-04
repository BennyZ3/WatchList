const { Router } = require("express");
const { getAllUsers } = require("../queries/usersQueries");

const usersController = Router();

usersController.get("/", async (request, response) => {
  try {
    const users = await getAllUsers();
    response.status(200).json({ users });
  } catch (err) {
    response.status(500).json({ error: "Error getting users" });
  }
});

module.exports = usersController;
