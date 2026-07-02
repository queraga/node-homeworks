# Homework 9 – Authentication & Authorization

This project extends the authentication system by adding account security, authorization, and profile management features.

## Features

### Task 1 – User Registration

- User registration endpoint (`POST /register`)

- Email uniqueness validation

- Password hashing with bcrypt

- Proper HTTP status codes and error handling

### Task 2 – Force Password Change

- Added `mustChangePassword` field to the user model

- Middleware to check whether a password change is required

- Password update endpoint (`POST /change-password`)

- Automatic password hashing using Sequelize hooks

### Task 3 – Delete Account

- Protected endpoint (`POST /delete-account`)

- Current password verification

- Secure account deletion

- JWT authentication

### Task 4 – Role-Based Authorization

- Added `role` field to the user model

- Role validation middleware

- Protected admin endpoint (`GET /admin`)

- Access limited to users with the `admin` role

### Task 5 – Change Email

- Protected endpoint (`POST /change-email`)

- Current password verification

- Email uniqueness validation

- Secure email update

## Technologies

- Node.js

- Express.js

- Sequelize

- MySQL

- bcryptjs

- JSON Web Token (JWT)

- dotenv
