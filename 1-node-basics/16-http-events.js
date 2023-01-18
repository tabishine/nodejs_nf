const http = require("http");

const server = http.createServer();

server.on("request", (req, err) => {
  console.log(req.url);
});

server.on("response", (res, err) => {
  console.log(req.url);
});

server.listen(8080);
