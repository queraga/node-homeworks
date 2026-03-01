import http from "http";

const port = 3333;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.method === "PUT") {
    res.statusCode = 200;
    res.end("PUT request is ready!");
    return;
  } else if (req.method === "DELETE") {
    res.statusCode = 200;
    res.end("DELETE request is ready!");
    return;
  } else {
    res.statusCode = 405;
    res.end("Method not allowed");
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
