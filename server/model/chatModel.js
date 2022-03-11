const path = require("path");
const pathToroomsJSONfile = path.join(__dirname, "../data/db.json");
let Rooms = require(pathToroomsJSONfile);
const helper = require("../helper/api_helper.js");

const getAllData = () => {
  let getRooms = helper.readData(pathToroomsJSONfile);
  console.log(getRooms);
  return getRooms;
};

const postComments = (id, comment, key) => {
    console.log("creating comment - model");
    let database = helper.readData(pathToroomsJSONfile);
    let people = database.people;
    let finder = people.find((person) => (person["personid"] == id));
      let idobj = {};
      idobj[key] = helper.newID();
      let comments = comment;
      comments["authorFullName"] = finder["userNameFirst"] + " " + finder["userNameLast"];
      comments["authorID"] = finder["personid"];
      comments["timestamp"] = Date.now();
      comments["isEdited"] = false;
      const newItem = {
        ...idobj,
        ...comments,
      };
      // console.log(readList.people);
      finder.comments.push(newItem);
      helper.writeData(pathToroomsJSONfile, database);
      return newItem;
}
module.exports = {
    getAllData,
    postComments
}