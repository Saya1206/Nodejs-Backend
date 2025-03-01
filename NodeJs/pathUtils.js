const path = require("path");

const filepath = path.join("users", "documents", "demo", "info.txt");
console.log(filepath);

console.log(path.resolve("/home", "user", "demo.txt"));

console.log(path.basename("/users/documents/demo/output.txt"));

console.log(path.dirname("/users/documents/demo/output.txt"));

console.log(path.extname("/users/documents/demo/output.txt"));
