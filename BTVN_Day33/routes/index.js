var express = require("express");
var router = express.Router();

const LinkController = require("../controllers/LinkController");
const LoginMiddleware = require("../middlewares/LoginMiddleware");

/* GET home page. */
router.get("/", LoginMiddleware, LinkController.link);
router.post("/", LinkController.handleLink);

module.exports = router;
