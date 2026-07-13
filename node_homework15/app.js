import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer);

const PORT = 3000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("chat message", (message) => {
    console.log("Message received:", message);

    socket.emit("message received", {
      message: `Server received: ${message}`,
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
