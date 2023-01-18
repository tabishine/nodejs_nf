const fs = require("fs");

fs.readFile("./content/first.txt", () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
});
