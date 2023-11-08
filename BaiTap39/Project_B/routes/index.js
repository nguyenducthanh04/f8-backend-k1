var express = require("express");
var router = express.Router();
const HomeController = require("../controllers/HomController");
/* GET home page. */
router.get("/", HomeController.index);

module.exports = router;
