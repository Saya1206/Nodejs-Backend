const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

// GET from Fake Store API and return it to frontend
app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data); // Send data to frontend
  } catch (error) {
    console.error("Error fetching from Fake Store API:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
