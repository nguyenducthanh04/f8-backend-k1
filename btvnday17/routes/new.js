var express = require("express");
var router = express.Router();
var newController = require("../controllers/newController");

router.get("/", newController.home);
router.get("/new1", newController.new1);
router.get("/new2", newController.new2);
module.exports = router;
