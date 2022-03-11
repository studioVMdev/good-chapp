const express = require("express");
const router = express.Router();
const Controller = require("../controller/chatController");

router.get("/", Controller.getAllRooms);
router.post("/:personid", Controller.createComment);

module.exports = router;
