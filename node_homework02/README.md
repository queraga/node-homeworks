# Chat App (EventEmitter)

A simple chat simulation built with Node.js **EventEmitter**.

## What it does

- Sends chat messages via a `message` event
- Prints messages in the console in the format `User: Message`

## Files

- chat_app.js - main script

## How it works

- `sendMessage(username, message, emitter)` emits a `message` event
- A listener handles the `message` event and logs output to the console

## Run

```bash
node chat_app.js
```

## Topics Covered
	•	Node.js core module: events
	•	EventEmitter
	•	emit / on
	•	Passing multiple arguments in events
