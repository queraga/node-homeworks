import http from "http";

const port = 3333;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (!req.headers.authorization) {
    res.statusCode = 401;
    res.end("Unauthorized");

    return;
  }

  res.statusCode = 200;
  res.end("Authorized");
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
