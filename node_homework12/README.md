# Homework 12 – MongoDB CRUD API

## Overview

This project demonstrates a simple REST API built with Express.js and the native MongoDB Driver.

The application connects to a local MongoDB database and provides CRUD operations for managing products.

## Technologies

- Node.js
- Express.js
- MongoDB
- MongoDB Driver
- dotenv

## Features

### Task 1 – MongoDB Connection

- Connection to a local MongoDB database
- Environment variables for database configuration
- Server starts only after a successful database connection
- Database connection error handling

### Task 2 – Products CRUD API

- Create a new product
- Get all products
- Get a product by ID
- Update a product
- Delete a product

### Task 3 – Error Handling

- `try-catch` blocks for asynchronous database operations
- `400 Bad Request` for missing product data
- `404 Not Found` when a product does not exist
- `500 Internal Server Error` for database and server errors

## API Endpoints

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| POST   | `/products`     | Create a new product |
| GET    | `/products`     | Get all products     |
| GET    | `/products/:id` | Get a product by ID  |
| PUT    | `/products/:id` | Update a product     |
| DELETE | `/products/:id` | Delete a product     |

## Product Structure

```
json
{
  "name": "iPhone 16",
  "price": 999,
  "description": "Apple smartphone"
}
```

## Environment Variables

Create a `.env` file:

```
env
PORT=7777
MONGO_URI=mongodb://127.0.0.1:27017
DB_NAME=homework12
```

## Run the Project

Install dependencies:

```
bash
npm install
```

Start the server:

```
bash
node app.js
```
