const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/db.config");
require("dotenv").config();

connectDB(); 

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server listening on the port: ${port}`);
});
