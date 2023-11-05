const model = require("../models/index");
const User = model.User;
module.exports = {
  index: async (req, res) => {
    const user = await User.findAll();
    res.send(user);
  },
};
