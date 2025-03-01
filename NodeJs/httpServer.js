const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello!");
});

server.listen(3000);

// 2. Log Requests to the Console
/*
const server = http.createServer((req, res) => {
  console.log(`${req.method} request received for ${req.url}`);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello");
});

server.listen(3000);
*/

// 3. Respond Based on the URL
/*
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the Home page");
  } else if (req.url === "/about") {
    res.end("This is the About page");
  } else {
    res.end("Page Not Found");
  }
});

server.listen(3000);
*/
