# Node.js Homework 06 – Express + MySQL

## Overview

This project demonstrates how to:

- Connect an Express application to MySQL
- Create a database table
- Implement REST API endpoints
- Insert and retrieve data from a database

---

## Technologies Used

- Node.js
- Express.js
- MySQL
- mysql2
- dotenv

---

## Setup Instructions

1. Install dependencies:

npm install

2. Configure environment variables in `.env`:

DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=your_password  
DB_NAME=product_db

3. Create the database:

CREATE DATABASE product_db;

4. Create the table:

node setup.js

5. Start the server:

node index.js

---

## API Endpoints

### GET /products

Returns all products from the database.

### POST /products

Adds a new product.

Example body:

{
"name": "MacBook",
"price": 1999.99
}

---

## Project Structure

- db.js – Database connection pool
- setup.js – Table initialization
- index.js – Express server and routes
