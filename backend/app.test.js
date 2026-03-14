const request = require('supertest');
const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());
app.use('/products', productRoutes);

describe('Product API', () => {
  it('should return 200 for GET /products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    // Optionally check response structure
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return 201 for POST /products', async () => {
    const product = { name: 'Test', price: 10.5, description: 'Test product' };
    const res = await request(app).post('/products').send(product);
    expect([201, 200]).toContain(res.statusCode); // Accept 200 or 201
    expect(res.body).toHaveProperty('id');
  });

  it('should return 200 for DELETE /products/:id', async () => {
    // Create a product first
    const product = { name: 'DeleteMe', price: 5, description: 'To delete' };
    const postRes = await request(app).post('/products').send(product);
    const id = postRes.body.id;
    const delRes = await request(app).delete(`/products/${id}`);
    expect(delRes.statusCode).toBe(200);
  });
});
