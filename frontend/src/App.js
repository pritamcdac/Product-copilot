import React, { useEffect, useState } from 'react';
import api from './api';
import Product from './components/Product';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', description: '' });

  const fetchProducts = async () => {
    const res = await api.get('/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await api.post('/products', form);
    setForm({ name: '', price: '', description: '' });
    fetchProducts();
  };

  const handleDelete = async id => {
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="container">
      <h1>Product Management</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" required type="number" step="0.01" />
        <input name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
        <button type="submit">Add Product</button>
      </form>
      <Product products={products} onDelete={handleDelete} />
    </div>
  );
}

export default App;
