const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const products = [
  { id: 1, name: "T-Shirt", price: 399 },
  { id: 2, name: "Jeans", price: 999 },
  { id: 3, name: "Shoes", price: 1499 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
