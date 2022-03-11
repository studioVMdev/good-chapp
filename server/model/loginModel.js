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

const makeUser = (name, key) => {
  let database = helper.readData(pathToroomsJSONfile);
  let people = database.people;
  console.log(name["userNameFirst"]);
  console.log(people[0]["userNameFirst"]);
  let finder = people.find((person) => person["userNameFirst"] == name["userNameFirst"] && person["userNameLast"] == name["userNameLast"]);
  console.log("we have found ", finder);
  if (finder !== undefined) {
    return finder;
  } else {
    let newFile = helper.createNew(pathToroomsJSONfile, name, key);
    return newFile;
  }
}
module.exports = {
  getAllData,
  makeUser,
};
