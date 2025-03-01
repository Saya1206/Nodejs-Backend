const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("An event created");
});

myEmitter.emit("event");

// Listening for multiple events
myEmitter.on("multipleEvents", (msg) => {
  console.log(`Received: ${msg}`);
});

myEmitter.emit("multipleEvents", "Hello, this is an event message!");
