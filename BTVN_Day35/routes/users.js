var express = require("express");
var router = express.Router();
const UserController = require("../controller/UserController");
const BanMiddleware = require("../middlewares/BanMiddleware");
/* GET users listing. */
router.get("/", UserController.index);
router.get("/:id", UserController.view);
router.post("/", UserController.store);
router.put("/:id", BanMiddleware.banUser, UserController.edit);
router.delete("/:id", BanMiddleware.banUser, UserController.delete);
router.patch("/:id", BanMiddleware.banUser, UserController.patch);
module.exports = router;
