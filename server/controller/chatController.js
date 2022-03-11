const Model = require("../model/chatModel");

const getAllRooms = (_req, res) => {
  const roomContent = Model.getAllData();
  console.log(roomContent);
  res.status(200).json(roomContent);
};

const createComment = (req, res) => {
  id = req.params["personid"];
  console.log("ID is: ", id, "and is type", typeof(id));
  key = "commentid";
  console.log("creating comment - controller")
  const newComment = Model.postComments(id, req.body, "commentid");
  res.status(201).json(newComment)
}
module.exports = {
    getAllRooms,
    createComment
}