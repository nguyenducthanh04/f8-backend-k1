var express = require("express");
var router = express.Router();
var eventController = require("../controllers/eventController");

router.get("/", eventController.home);
router.get("/event1", eventController.event1);
router.get("/event2", eventController.event2);
module.exports = router;
