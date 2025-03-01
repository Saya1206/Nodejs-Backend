const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end(JSON.stringify({ message: "Welcome to the Node.js API!" }));
  } else if (req.url === "/users" && req.method === "GET") {
    const user = [
      { id: 1, name: "Amit" },
      { id: 2, name: "Sneha" },
    ];
    res.end(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
