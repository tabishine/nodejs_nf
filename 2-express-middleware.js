const express = require("express");
// const path = require("path");

const app = express();

//middleware
app.use(express.static("./content/kairow"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

// app.get("/kairow", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./content/kairow/index.html"));
// });

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not Found 404</h1>");
});

app.listen(5000);
