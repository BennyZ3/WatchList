const app = require("./app");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
