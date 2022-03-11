const express = require('express');
const app = express();
const Rooms = require("./view/loginView");
const Chat = require("./view/chatView")
const cors = require("cors");
// const RoomsJSON = "./data/db.json"
// const Rooms = require("./data/db.json");
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server); //might need to make more of these to make different chatrooms

app.use(express.json());
app.use(cors());

app.use("/", Rooms);
app.use("/chat", Chat);

app.get("/", (_req, res) => {
    res.send('Hello World!')
})

app.listen(5050, () => {
    console.log(`App listening on port 5050`);
})

const users = {};

io.on("connection", (socket) => {
  socket.on("new-user", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-connected", name);
  });
  socket.on("send-chat-message", (message) => {
    socket.broadcast.emit("chat-message", {
      message: message,
      name: users[socket.id],
    });
  });
  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
  });
});