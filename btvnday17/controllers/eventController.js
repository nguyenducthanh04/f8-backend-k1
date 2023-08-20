module.exports = {
  home: (req, res) => {
    res.render("Events/home");
  },
  event1: (req, res) => {
    res.render("Events/event1");
  },
  event2: (req, res) => {
    res.render("Events/event2");
  },
};
