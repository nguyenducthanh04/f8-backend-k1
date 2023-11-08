class AuthController {
  async login(req, res) {
    res.render("auth/login");
  }
  async handleLogin(req, res) {
    res.redirect("/");
  }
  async logout(req, res, next) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
  }
}
module.exports = new AuthController();
