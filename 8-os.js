const os = require("os");

// console.log(os);

const myOS = {
  type: os.type(),
  uptime: os.uptime(),
};

console.log(myOS);
