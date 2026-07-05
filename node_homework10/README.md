# Homework 10 – JWT Authentication API

## Overview

This project demonstrates a simple Express.js REST API with JWT authentication using an in-memory users array instead of a database.

The application includes user authentication, protected routes, role-based authorization, email updates, account deletion, and JWT token refresh.

## Technologies

- Node.js
- Express.js
- JSON Web Token (JWT)
- bcryptjs
- dotenv

## Features

### Task 1 – Update Email

- User login with JWT authentication
- Protected route for updating user email
- JWT middleware for authentication

### Task 2 – Delete Account

- Protected account deletion endpoint
- User removal from the in-memory users array

### Task 3 – Role-Based Authorization

- Admin-only middleware
- Protected endpoint for updating user roles

### Task 4 – Refresh JWT Token

- Protected endpoint for generating a new JWT
- Token renewal without re-authentication

## API Endpoints

| Method | Endpoint          | Description                             |
| ------ | ----------------- | --------------------------------------- |
| POST   | `/login`          | Authenticate user and receive JWT       |
| PUT    | `/update-email`   | Update authenticated user's email       |
| POST   | `/delete-account` | Delete authenticated user's account     |
| PUT    | `/update-role`    | Update another user's role (Admin only) |
| POST   | `/refresh-token`  | Generate a new JWT token                |

## Notes

- Users are stored in an in-memory array.
- Passwords are hashed using bcrypt.
- Protected routes require a valid JWT token.
- Admin routes require the `admin` role.
