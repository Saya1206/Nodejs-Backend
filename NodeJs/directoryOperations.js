const fs = require("fs");

// 1. Creating a simple directory
fs.mkdir("newdir", { recursive: true }, (err) => {
  if (err) {
    console.error("Error creating directory");
  }
  console.log("Directory created successfully");
});

// 2. Creating nested directories
fs.mkdir("parent/child/grandchild", { recursive: true }, (err) => {
  if (err) {
    console.error("Error creating directory");
  }
  console.log("Nested directories created successfully");
});

// 3. Read directory
fs.readdir("newdir", (err, files) => {
  if (err) {
    console.error("Error reading directory: ", err);
  }
  console.log("Files in directory: ", files);
});
