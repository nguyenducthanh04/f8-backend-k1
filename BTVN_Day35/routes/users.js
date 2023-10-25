var express = require("express");
var router = express.Router();
const UserController = require("../controller/UserController");
const BanMiddleware = require("../middlewares/BanMiddleware");
const LimitRequestMiddleware = require("../middlewares/LimitRequestMiddleware");
/* GET users listing. */
router.get("/", UserController.index);
router.get("/:id", UserController.view);
router.post("/", UserController.store);
router.put(
  "/:id",
  BanMiddleware.banUser,
  LimitRequestMiddleware,
  UserController.edit
);
router.delete(
  "/:id",
  BanMiddleware.banUser,
  LimitRequestMiddleware,
  UserController.delete
);
router.patch(
  "/:id",
  BanMiddleware.banUser,
  LimitRequestMiddleware,
  UserController.patch
);
module.exports = router;
