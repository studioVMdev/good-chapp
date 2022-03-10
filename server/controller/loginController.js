const Model = require("../model/loginModel");

const getAllRooms = (_req, res) => {
    const roomContent = Model.getAllData();
    console.log(roomContent);
    res.status(200).json(roomContent);
};

const createUser = (req, res) => {
    console.log("got to controller");
    const newUser = Model.makeUser(req.body);
    res.status(201).json(newUser);
    console.log("postman been posted");
};

module.exports = {
    getAllRooms,
    createUser,
}