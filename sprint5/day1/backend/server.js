const express = require("express");
const http = require("http");
const server = express();
const { Server } = require("socket.io");
const app = http.createServer(server);
const io = new Server(app);

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (message) => {
    io.emit('message',message)
  });
});

app.listen(8080, () => {
  try {
    console.log(`server is running at 8080`);
  } catch (err) {
    console.log(err);
  }
});
