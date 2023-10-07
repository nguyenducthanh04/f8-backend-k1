var express = require("express");
var router = express.Router();
const passport = require("passport");
const AuthController = require("../controllers/AuthController");
const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/");
  }
  next();
};
/* Authentication routes. */
router.get("/login", isLogin, AuthController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
  }),
  AuthController.handleLogin
);
router.get("/register", isLogin, AuthController.register);
router.post("/register", AuthController.handleRegister);
router.get("/logout", AuthController.logout);
router.get("/forget", AuthController.forget);
router.post("/forget", AuthController.handleFoget);
router.get("/reset/:token", AuthController.reset);
router.post("/reset/:token", AuthController.handleReset);

module.exports = router;
