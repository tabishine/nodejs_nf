// Event Driven Code
const EventEmitter = require("events");

const requester = new EventEmitter();

requester.on("request", (name, age) => {
  console.log("first request completed" + " " + name + " " + age);
});

requester.on("request", (name) => {
  console.log("second request completed");
});

requester.on("demon", () => {
  console.log("demon");
});

requester.emit("request", "Serik", 29);
