const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("message", (username, message) => {
  console.log(username, ":", message);
});

function sendMessage(username, message, emitter) {
  emitter.emit("message", username, message);
}

sendMessage("Alex", "Hello", emitter);
sendMessage("Kate", "Hallo", emitter);
sendMessage("Bob", "BonGiorno", emitter);
