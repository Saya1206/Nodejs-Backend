const fs = require("fs");

// 1. Watch file for changes
fs.watchFile("demo.txt", (eventType, filename) => {
  if (filename) {
    console.log(`File: ${filename} | Event: ${eventType}`);
  } else {
    console.error("Filename not provided");
  }
});

// 2. Get file stats (size, permissions, last modified time)
fs.stat("newone.txt", (err, stats) => {
  if (err) {
    console.error("Error getting file stat: ", err);
  }
  console.log("File Stats: ", stats);
});
