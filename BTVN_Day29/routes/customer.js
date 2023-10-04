var express = require("express");
var router = express.Router();
const CustomerController = require("../controllers/CustomerController");
/* GET users listing. */
router.get("/", CustomerController.index);

module.exports = router;
