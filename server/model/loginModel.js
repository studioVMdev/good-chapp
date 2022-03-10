const path = require('path');
const pathToroomsJSONfile = path.join(__dirname, "../data/db.json");
let Rooms = require(pathToroomsJSONfile);
const helper = require("../helper/api_helper.js");

const getAllData = () => {
    let getRooms = helper.readData(pathToroomsJSONfile);
    console.log(getRooms);
    return getRooms;
}

//getRooms

const makeUser = (name) => {
    console.log("got to model")
    let newFile = helper.createNew(pathToroomsJSONfile, name);
    return newFile;
}
module.exports = {
  getAllData,
  makeUser,
};
