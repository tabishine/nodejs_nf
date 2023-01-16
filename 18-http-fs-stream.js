const http = require("http");

const fs = require("fs");

http
  .createServer((request, response) => {
    // const data = fs.readFileSync("./content/big.txt", "utf-8");
    // response.end(data);

    const fsStream = fs.createReadStream("./content/big.txt", "utf-8", {
      highWaterMark: 60000,
    });
    fsStream.on("data", () => {
      fsStream.pipe(response);
    });

    fsStream.on("error", (err) => {
      response.end(err);
    });
  })
  .listen(5000);
