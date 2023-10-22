var express = require("express");
var router = express.Router();
const PerMiddleware = require("../middlewares/PerMiddleware");
const roleUser = require("../utils/roleUser");
/* GET home page. */
router.get(
  "/",
  async function (req, res, next) {
    const permissions = await PerMiddleware(req);
    if (!permissions?.includes("users.read")) {
      res.render("index");
      return;
    }
    next();
  },
  async function (req, res, next) {
    // const userRoleName = await roleUser(req, res);
    res.render("index");
  }
);

module.exports = router;

/*
Viết middleware để check route và permission tương ứng
Viết hàm check quyền -> Ẩn/Hiện các button, menu tương ứng
*/
