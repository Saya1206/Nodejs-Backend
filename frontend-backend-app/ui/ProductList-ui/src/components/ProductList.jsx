import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Store Products</h1>
      <ul>
        {products.map((t) => (
          <li key={t.id}>
            {t.title} - ${t.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
