import http from "http";
import fs from "fs";

const port = 3333;

const server = http.createServer((req, res) => {
  try {
    throw new Error("test error");
  } catch (err) {
    fs.appendFile(
      "errors.log",
      `[${new Date().toISOString()}] ${err.message + "\n"}`,
      (logErr) => {
        if (logErr) {
          console.log("Error while appending File:", logErr);
        }
      },
    );

    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error!");
    return;
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
