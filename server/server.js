const express = require('express');
const app = express();
const Rooms = require("./view/loginView");
const cors = require("cors");
// const RoomsJSON = "./data/db.json"
// const Rooms = require("./data/db.json");
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require('socket.io');
// const io = new Server(server); //might need to make more of these to make different chatrooms

app.use(express.json());
app.use(cors());

app.use("/", Rooms);

app.get("/", (_req, res) => {
    res.send('Hello World!')
})

app.listen(5050, () => {
    console.log(`App listening on port 5050`);
})

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);

//         console.log('message: ' + msg);
//     })
//     console.log("a user joined") //can update by putting into the chatbox when a user joins.
// })

// server.listen(5050, () => {
//     console.log("listening on 5050");
// });