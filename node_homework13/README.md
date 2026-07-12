# Homework 13 – Mongoose Relationships

## Overview

This project demonstrates MongoDB connection using Mongoose and relationships between Mongoose models.

The application includes examples of one-to-many and many-to-many relationships using MongoDB ObjectId references.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Features

### Task 1 – MongoDB Connection with Mongoose

- Express server setup
- MongoDB connection using Mongoose
- Environment variables for database configuration
- Server starts only after a successful database connection
- Connection error handling

### Task 2 – One-to-Many Relationship

Models:

- `Publisher`
- `Magazine`

Each magazine stores a reference to one publisher using `ObjectId` and `ref`.

```
text
Publisher 1 ────────< Many Magazines
```

### Task 3 – Many-to-Many Relationship

Models:

- `Tag`
- `Article`

Each tag stores an array of article references, and each article stores an array of tag references.

```
text
Tags >────────< Articles
```

## Project Structure

```
text
homework-13/
├── app.js
├── .env
├── package.json
├── db/
│   └── index.js
└── models/
    ├── Publisher.js
    ├── Magazine.js
    ├── Tag.js
    └── Article.js
```

## Environment Variables

Create a `.env` file:

```
env
PORT=7777
MONGO_URI=mongodb://127.0.0.1:27017/homework13
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
