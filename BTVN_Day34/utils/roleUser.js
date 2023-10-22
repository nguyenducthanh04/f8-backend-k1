const model = require("../models/index");
const User = model.User;
const Role = model.Role;

module.exports = async (req, res) => {
  const { id } = req.user;
  console.log(id);
  const user = await User.findOne({
    where: {
      id,
    },

    include: {
      model: Role,
    },
  });

  const roles = user.Roles;
  const userRoleName = roles.map((role) => role.dataValues.name);
  return userRoleName;
};
