module.exports = {
  index: (req, res) => {
    const { email, password } = req.session; // Lay email va pass tu session luu vao const
    if (email === "admin@gmail.com" && password === "123456") {
      res.render("Home/index");
    } else {
      res.redirect("/login");
    }
  },
  handleLogout: (req, res) => {
    delete req.session.email;
    delete req.session.password;
    res.redirect("/home");
  },
};
