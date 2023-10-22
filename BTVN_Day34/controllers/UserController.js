const model = require("../models/index");
const User = model.User;
const Role = model.Role;
const { isRole } = require("../utils/permisson");
const roleName = require("../utils/roleUser");
module.exports = {
  index: async (req, res) => {
    const users = await User.findAll();
    const userRoleName = await roleName(req, res);
    console.log(userRoleName);
    res.render("users/index", { users, userRoleName });
  },

  permission: async (req, res) => {
    const { id } = req.params;
    const roles = await Role.findAll();
    const user = await User.findOne({
      where: {
        id,
      },
      include: {
        model: Role,
      },
    });
    const userRoleName = await roleName(req, res);
    //Enhanced Literal Object
    res.render("users/permission", { roles, user, isRole, userRoleName });
  },

  handlePermission: async (req, res) => {
    let { roles } = req.body;
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      res.redirect("/users");
      return;
    }

    if (roles) {
      roles = typeof roles === "string" ? [roles] : roles;

      const roleUpdate = await Promise.all(
        roles.map((roleId) =>
          Role.findOne({
            where: {
              id: roleId,
            },
          })
        )
      );

      await user.setRoles(roleUpdate);
    }

    res.redirect("/users");
  },
};
