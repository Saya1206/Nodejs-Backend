const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.post("/greet", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}` });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
