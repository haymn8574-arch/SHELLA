const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Data storage paths
const ordersFile = path.join(__dirname, 'data', 'orders.json');
const customersFile = path.join(__dirname, 'data', 'customers.json');
const productsFile = path.join(__dirname, 'data', 'products.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// Utility functions
const readJSON = (file) => {
  try {
    return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : [];
  } catch {
    return [];
  }
};

const writeJSON = (file, data) => {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SHELLA API is running' });
});

// Orders
app.get('/api/orders', (req, res) => {
  const orders = readJSON(ordersFile);
  res.json(orders);
});

app.post('/api/orders', (req, res) => {
  const orders = readJSON(ordersFile);
  const newOrder = { ...req.body, id: 'ORD-' + Date.now() };
  orders.push(newOrder);
  writeJSON(ordersFile, orders);
  res.json(newOrder);
});

app.put('/api/orders/:id', (req, res) => {
  const orders = readJSON(ordersFile);
  const index = orders.findIndex(o => o.id === req.params.id);
  if (index >= 0) {
    orders[index] = { ...orders[index], ...req.body };
    writeJSON(ordersFile, orders);
    res.json(orders[index]);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

app.delete('/api/orders/:id', (req, res) => {
  const orders = readJSON(ordersFile);
  const filtered = orders.filter(o => o.id !== req.params.id);
  writeJSON(ordersFile, filtered);
  res.json({ success: true });
});

// Customers
app.get('/api/customers', (req, res) => {
  const customers = readJSON(customersFile);
  res.json(customers);
});

app.post('/api/customers', (req, res) => {
  const customers = readJSON(customersFile);
  const newCustomer = { ...req.body, id: 'CUST-' + Date.now() };
  customers.push(newCustomer);
  writeJSON(customersFile, customers);
  res.json(newCustomer);
});

// Products
app.get('/api/products', (req, res) => {
  const products = readJSON(productsFile);
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ SHELLA API running on http://localhost:${PORT}`);
});
