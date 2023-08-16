module.exports = {
  index: (req, res) => {
    const { email, password } = req.session; // Lay email va pass tu session luu vao const

    if (email === "admin@gmail.com" && password === "123456") {
      res.render("Home/index");
    } else if (email === "" || password === "") {
      req.flash("errorMessage", "Vui lòng nhập đầy đủ thông tin");
      res.render("Login/index", { errorMessage: req.flash("errorMessage") });
    } else if (email !== "admin@gmail.com" || password !== "123456") {
      req.flash("errorMessage", "Tài khoản hoặc mật khẩu không đúng");
      res.render("Login/index", { errorMessage: req.flash("errorMessage") });
    }
  },
  handleLoginController: (req, res) => {
    const { email, password } = req.body;
    req.session.email = email;
    req.session.password = password; //create a new property in session
    return res.redirect("/home");
  },
};
