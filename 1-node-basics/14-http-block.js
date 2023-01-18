const http = require("http");

const server = http.createServer((req, res, err) => {
  console.log(req.url);
  if (req.url === "/") {
    //BLOCKING CODE
    for (let i = 0; i <= 10000; i++) {
      for (let j = 0; j <= 10000; j++) {
        console.log(i + j);
      }
    }
    res.write("main page");
  } else if (req.url === "/cart") {
    res.write("cart page");
  } else res.write("page not defined");

  res.end();
});

server.listen(8080, () => {
  console.log("server is listening");
});
