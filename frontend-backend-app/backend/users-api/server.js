const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

let users = [];

// Routes
app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { name, age, email } = req.body;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res
      .status(400)
      .json({ message: "Valid name is required (min 2 characters)." });
  }

  if (!age || typeof age !== "number" || age <= 0) {
    return res
      .status(400)
      .json({ message: "Valid age is required (number > 0)" });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: "Valid email is required" });
  }

  const user = { id: users.length + 1, name: name.trim(), age, email };
  users.push(user);
  res.json({ message: "User added", user });
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.json({ message: "User deleted" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
