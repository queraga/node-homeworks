# Simple Logger (fs module)

A simple Node.js logger that writes messages to a file using the built-in **fs** module.

## Files

- logger.js - logging function
- app.js - script that sends log messages
- log.txt - generated log file

## How it works

The `logMessage` function appends messages to `log.txt` using `fs.appendFile`.

Each message is written on a new line.

## Run

```bash
node app.js
```

After running, check log.txt to see the logged messages.

Topics Covered
	•	Node.js core module: fs
	•	appendFile (async)
	•	module.exports / require
