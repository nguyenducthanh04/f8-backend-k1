var express = require("express");
var router = express.Router();

const login = require("../Controllers/LoginController");
const home = require("../Controllers/HomeController");

router.get("/login", login.index);
router.post("/login", login.handleLoginController);
router.get("/home", home.index);
router.post("/home", home.handleLogout);
module.exports = router;
