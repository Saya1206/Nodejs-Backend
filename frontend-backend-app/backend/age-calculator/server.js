const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/age/:year", (req, res) => {
  const year = parseInt(req.params.year);
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  res.json({ age });
});

app.listen(5000, () => {
  console.log(`Server listening on port ${PORT}`);
});
