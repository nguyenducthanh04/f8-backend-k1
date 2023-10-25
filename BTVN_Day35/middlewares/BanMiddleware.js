const model = require("../models/index");
const User = model.User;
const Ban = model.ban_table;

module.exports = {
  banUser: async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
      },
    });
    const banned = await Ban.findAll();
    const bannedUserCheck = banned.find((ban) => ban.email === user.email); //Trả về user có email trùng với email bị BAN
    if (bannedUserCheck) {
      const response = {
        status: "error",
        errorText: "Bạn chưa được cấp quyền truy cập!",
      };
      res.status(403).json(response);
    }
    next();
  },
};
