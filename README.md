# Product 3-Tier Management Application

## Project Structure

```
product-3tier-app
│
├── backend
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   ├── routes
│   │   └── productRoutes.js
│   └── controllers
│       └── productController.js
│
└── frontend
    ├── package.json
    ├── public
    │   └── index.html
    └── src
        ├── App.js
        ├── index.js
        ├── api.js
        ├── index.css
        └── components
            ├── Product.js
            └── Product.css

database.sql
```

## How to Run Locally

### 1. Install Dependencies

Open two terminals, one for backend and one for frontend:

**Backend:**
```
cd backend
npm install
```

**Frontend:**
```
cd frontend
npm install
```

### 2. Create Database

- Make sure MySQL is running locally on port 3308.
- Use the provided `database.sql` file to create the database and table:

```
mysql -u root -p --port=3308 < ../database.sql
```
Enter password: `root123`

### 3. Run Backend

```
cd backend
npm start
```
Backend runs on [http://localhost:5000](http://localhost:5000)

### 4. Run Frontend

```
cd frontend
npm start
```
Frontend runs on [http://localhost:3000](http://localhost:3000)

### 5. Open Browser

Go to [http://localhost:3000](http://localhost:3000)

## Layer Explanations

### Frontend
- Built with React.
- Axios is used to communicate with backend REST API.
- Allows users to add, view, and delete products.

### Backend
- Node.js with Express.
- REST API endpoints for product management.
- Connects to MySQL using mysql2 and connection pool.
- Handles CORS for frontend communication.

### Database
- MySQL running locally on port 3308.
- `productdb` database with `products` table.
- SQL script provided in `database.sql`.

## Features
- Add Product
- View All Products
- Delete Product

## Product Table Fields
- id
- name
- price
- description

---

**Expected final browser URL:**
http://localhost:3000
