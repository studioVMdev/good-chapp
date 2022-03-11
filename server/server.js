const express = require('express');
const app = express();
const Rooms = require("./view/loginView");
const Chat = require("./view/chatView")
const cors = require("cors");
// const RoomsJSON = "./data/db.json"
// const Rooms = require("./data/db.json");

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