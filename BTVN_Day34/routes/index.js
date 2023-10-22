var express = require("express");
var router = express.Router();
const PerMiddleware = require("../middlewares/PerMiddleware");

/* GET home page. */
router.get(
  "/",
  async function (req, res, next) {
    const permissions = await PerMiddleware(req);
    if (!permissions?.includes("users.read")) {
      res.render("index", { layout: "layout_permission" });
      return;
    }
    next();
  },
  function (req, res, next) {
    res.render("index");
  }
);

module.exports = router;

/*
Viết middleware để check route và permission tương ứng
Viết hàm check quyền -> Ẩn/Hiện các button, menu tương ứng
*/
