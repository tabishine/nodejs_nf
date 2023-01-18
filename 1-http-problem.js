const http = require("http");
const fs = require("fs");

const kairowFile = fs.readFileSync("./content/kairow/index.html");
const kairowJS = fs.readFileSync("./content/kairow/assets/index.01332571.js");
const kairowCSS = fs.readFileSync("./content/kairow/assets/index.3fce1f81.css");
const kairowImage = fs.readFileSync(
  "./content/kairow/assets/kairow.8eeb5446.jpg"
);
const kairowMusic = fs.readFileSync(
  "./content/kairow/assets/myUniverse.1362bf1f.mp3"
);

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("About page");
  } else if (req.url === "/kairow") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(kairowFile);
  } else if (req.url === "/assets/index.01332571.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(kairowJS);
  } else if (req.url === "/assets/index.3fce1f81.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(kairowCSS);
  } else if (req.url === "/assets/kairow.8eeb5446.jpg") {
    res.writeHead(200, { "content-type": "image/jpg" });
    res.write(kairowImage);
  } else if (req.url === "/assets/myUniverse.1362bf1f.mp3") {
    res.writeHead(200, { "content-type": "audio/mp3" });
    res.write(kairowMusic);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404 Sorry page not found!</h1>");
  }

  res.end();
});

server.listen(5000);
