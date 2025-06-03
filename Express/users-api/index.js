const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];

// GET /users - Returns the list of all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST /users - Adds a new user to the list
app.post("/users", (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.json({ message: "User added", user });
});

// DELETE /users/:id - Deletes a user by their ID
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`server listining on port: ${PORT}`);
});
