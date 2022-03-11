const express = require("express");
const router = express.Router();
const Controller = require("../controller/loginController");

router.post("/login", Controller.createUser); //gives back an id, that id will be used for the userid.

module.exports = router;