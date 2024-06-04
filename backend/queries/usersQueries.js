const db = require("../db");

const getAllUsers = async () => {
  return await db.any("SELECT * FROM users");
};

module.exports = {
  getAllUsers,
};
