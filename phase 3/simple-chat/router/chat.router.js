// load the express module 
let express = require("express");
// This is use to create the router referene. 
// which help to route to controller function base upon the sub path.
let router = express.Router();
let chatController = require("../controller/chat.controller")

router.post("/save",chatController.storedChat);


module.exports=router;