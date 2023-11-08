var express = require("express");
var router = express.Router();
const AuthController = require("../controllers/AuthController");
// const LoginMiddleware = require("../middlewares/LoginMiddleware");
const passport = require("passport");
/* GET users listing. */
const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/");
  }
  next();
};
router.get("/login", isLogin, AuthController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
  }),
  AuthController.handleLogin
);
router.get("/logout", AuthController.logout);

module.exports = router;
