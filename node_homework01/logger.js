const fs = require("fs");
function logMessage(message) {
  fs.appendFile("log.txt", message + "\n", (err) => {
    if (err) {
      console.log("Something went wrong:", err);
    }
  });
}

module.exports = logMessage;
