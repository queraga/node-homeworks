# Homework 8 - Express + Sequelize CRUD API

## Description

This project demonstrates how to build a simple REST API using **Node.js**, **Express**, **Sequelize**, and **MySQL**.  
The API manages a list of books and supports basic CRUD operations.

---

## Tech Stack

- Node.js
- Express
- Sequelize (ORM)
- MySQL
- Sequelize CLI
- dotenv

## Project Setup

1. Initialize project

```
npm init -y
```

2. Install dependencies

```
npm install express sequelize sequelize-cli mysql2 dotenv
```

3. Initialize Sequelize structure

```
npx sequelize-cli init
```

4. Configure database connection in `config/config.cjs`.

5. Run migrations

```
npx sequelize-cli db:migrate –config config/config.cjs
```

### What I learned

- Setting up a Node.js backend project
- Configuring Sequelize with MySQL
- Creating models and migrations
- Building a REST API with Express
- Implementing full CRUD operations
- Testing API using curl
