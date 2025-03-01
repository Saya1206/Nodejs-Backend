const fs = require("fs");

// 1. Reading file
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file: ", err);
  }
  console.log("File Contents: ", data);
});

// readFileSync
try {
  const data = fs.readFileSync("example.txt", "utf-8");
  console.log("File Contents: ", data);
} catch (err) {
  console.error("Error reading file: ", err);
}

// 2. Writing file
// syntax : fs.writeFile(path, data, encoding, callback)
fs.writeFile("demo.txt", "Hello World", "utf-8", (err) => {
  if (err) {
    console.error("Error writing file: ", err);
  }
  console.log("File written successfully");
});

// writeFileSync
try {
  fs.writeFileSync("data.txt", "This is nodejs tutorial", "utf-8");
  console.log("File written successfully");
} catch (err) {
  console.error("Error writing file: ", err);
}

// 3. Appending file
// syntax : fs.appendFile(path, data, callback)
fs.appendFile("data.txt", "\n appended text", (err) => {
  if (err) {
    console.error("Error appending to file: ", err);
  }
  console.log("Data appended successfully");
});

// appendFileSync
fs.appendFileSync("data.txt", "\n append file sync data added", (err) => {
  if (err) {
    console.error("Error appending to file: ", err);
  }
  console.log("Data appended successfully");
});
