// load the express module 
let express = require("express");
// This is use to create the router referene. 
// which help to route to controller function base upon the sub path.
let router = express.Router();
let classController = require("../controller/class.controller")

router.get("/getAllClasses",classController.getAllClassDetails);
router.post("/storeClasses",classController.storedClassInfo);
router.delete("/deleteClasses/:pid",classController.deleteClassInfo);
router.put("/updateClasses",classController.updateClassDetails);

module.exports=router;