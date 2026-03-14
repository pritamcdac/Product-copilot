const pool = require('../db');

exports.addProduct = (req, res) => {
  const { name, price, description } = req.body;
  pool.query(
    'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
    [name, price, description],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: results.insertId, name, price, description });
    }
  );
};

exports.getProducts = (req, res) => {
  pool.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM products WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
};
