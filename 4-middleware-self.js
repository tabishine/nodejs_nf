const express = require("express");

const logger = require("./middlewares/logger");
const authorize = require("./authorization");

const app = express();

app.use([authorize, logger]);

app.get("/", (req, res) => {
  res.send("My App");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(5000);
