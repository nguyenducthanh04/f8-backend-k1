var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");
const UserMiddleware = require("../middlewares/UserMiddleware");
/* GET users listing. */
router.get("/", UserMiddleware.cacheMiddleware, UserController.index);

module.exports = router;
