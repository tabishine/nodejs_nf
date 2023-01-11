const http = require("http");

//request  = > то что я получаю из вне (React app)
//response  = > то что я отправляю обратно (React app)
//error
const server = http.createServer((req, res, err) => {
  res.write("hello");

  res.end();
});

server.listen(8080, () => {
  console.log("server is listening");
});
