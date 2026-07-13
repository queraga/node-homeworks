# Homework 15 – Socket.io Chat

## Overview

This project demonstrates a simple real-time chat application built with Express.js and Socket.io.

The client sends messages to the server through Socket.io events. The server logs each message and sends a confirmation back to the client.

## Technologies

- Node.js
- Express.js
- Socket.io
- HTML
- JavaScript

## Features

- Express server with static file hosting
- Real-time Socket.io connection
- User connection and disconnection events
- Client-to-server message events
- Server-to-client confirmation events
- Simple browser-based chat interface

## Project Structure

```
text
node_homework15/
├── app.js
├── package.json
└── public/
    └── index.html
```

## Socket Events

| Event              | Direction       | Description                            |
| ------------------ | --------------- | -------------------------------------- |
| `connection`       | Server          | Triggered when a client connects       |
| `chat message`     | Client → Server | Sends a message to the server          |
| `message received` | Server → Client | Confirms that the message was received |
| `disconnect`       | Server          | Triggered when a client disconnects    |

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

Open the application:

```
text
http://localhost:3000
```

## Testing

1. Open the application in a browser.
2. Enter a message and click **Send Message**.
3. Check that the message appears in the server console.
4. Check that the server confirmation appears on the page.
5. Open DevTools and inspect the Socket.io connection in the Network tab.
