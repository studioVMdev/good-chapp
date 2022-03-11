const Model = require("../model/loginModel");

const getAllRooms = (_req, res) => {
    const roomContent = Model.getAllData();
    console.log(roomContent);
    res.status(200).json(roomContent);
};

const createUser = (req, res) => {
    key = "personid";
    let name = req.body;
    //variable that is req.body, with each value lowercase.
    name.userNameFirst = name.userNameFirst.toLowerCase();
    name.userNameLast = name.userNameLast.toLowerCase();
    name["comments"] = [];
    const newUser = Model.makeUser(name, key);
    res.status(201).json(newUser);
};

module.exports = {
    getAllRooms,
    createUser,
}