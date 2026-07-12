# Homework 14 – Mongoose Populate

## Overview

This project demonstrates a one-to-many relationship between categories and products using Mongoose.

The application allows creating categories, creating products linked to categories, and retrieving products with populated category data.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Features

### Task 1 – Project Setup

- Express server configuration
- MongoDB connection with Mongoose
- Environment variables for database configuration
- Connection error handling

### Task 2 – Models and Relationship

- `Category` model with a required `name` field
- `Product` model with required `name` and `price` fields
- One-to-many relationship using a `category` ObjectId reference

### Task 3 – API and Populate

- Create categories
- Create products linked to categories
- Get all products with populated category information

## API Endpoints

| Method | Endpoint      | Description                                |
| ------ | ------------- | ------------------------------------------ |
| POST   | `/categories` | Create a new category                      |
| POST   | `/products`   | Create a new product                       |
| GET    | `/products`   | Get all products with populated categories |

## Environment Variables

```
env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/homework14
```
