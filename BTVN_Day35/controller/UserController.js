const { Op } = require("sequelize");
const model = require("../models/index");
const User = model.User;
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
module.exports = {
  index: async (req, res) => {
    const {
      query,
      order = "asc",
      sort = "createdAt",
      limit,
      page = 1,
    } = req.query;
    console.log(limit, page);
    const options = {
      attributes: ["id", "name", "email", "createdAt", "updatedAt"],
      order: [[sort, order]],
    };
    if (query) {
      options.where = {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${query}%`,
            },
          },
          {
            email: {
              [Op.like]: `%${query}%`,
            },
          },
        ],
      };
    }
    if (limit && Number.isInteger(+limit)) {
      //tra ve tong so ban ghi
      options.limit = +limit;
      const offset = (page - 1) * limit;
      options.offset = offset;
    }
    const { rows: users, count } = await User.findAndCountAll(options);
    const response = {
      status: "success",
      data: users,
      count,
    };
    res.json(response);
  },
  view: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({
        status: "error",
        error: "Not Found",
      });
      return;
    }
    res.json({
      status: "success",
      data: user,
    });
  },

  store: async (req, res) => {
    const { name, email } = req.body;
    const errors = {};
    if (!name) {
      errors.name = "Tên bắt buộc phải nhập";
    }
    if (!email) {
      errors.email = "Email bắt buộc phải nhập";
    } else if (!validateEmail(email)) {
      errors.email = "Email không đúng định dạng";
    } else {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        errors.email = "Email đã tồn tại";
      }
    }
    const response = {};
    if (Object.keys(errors).length) {
      Object.assign(response, {
        status: "error",
        errorText: "Validation",
        errors,
      });
      res.status(400).json(response);
      return;
    }
    const userCreate = await User.create({ name, email });
    if (userCreate) {
      // response.status = "success";
      Object.assign(response, {
        status: "success",
        data: userCreate,
      });
      res.status(201).json(response);
      return;
    }
    response = {
      status: "error",
      errorText: "Server error",
    };
    res.status(500).json(response);
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = User.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      const response = {
        status: "error",
        errorText: "NOT FOUND!",
      };
      res.status(404).json(response);
    }
    await User.update(
      {
        name: name,
        email: email,
      },
      {
        where: { id },
      }
    );
    const edited = await User.findOne({
      where: {
        id,
      },
    });
    res.json({
      status: "success",
      data: edited,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const user = User.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      const response = {
        status: "error",
        errorText: "NOT FOUND!",
      };
      res.status(404).json(response);
    }
    await user.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      success: "Đã xóa thành công!",
    });
  },
  patch: async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = User.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      const response = {
        status: "error",
        errorText: "NOT FOUND!",
      };
      res.status(404).json(response);
    }
    if (name) {
      await User.update(
        { name },
        {
          where: {
            id,
          },
        }
      );
    }
    if (email) {
      await User.update({ email }, { where: { id } });
    }
    const updateUser = await User.findOne({
      where: {
        id,
      },
    });
    res.json({
      status: "success",
      data: updateUser,
    });
  },
};
