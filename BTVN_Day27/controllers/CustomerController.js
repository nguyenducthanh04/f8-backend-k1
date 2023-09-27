const model = require("../models/index");
const Customer = model.Customer;
const Province = model.Province;
const User = model.User;
const moment = require("moment");
const { Op } = require("sequelize");
const { getPaginateUrl } = require("../utils/url");
const { validationResult } = require("express-validator");
const validate = require("../utils/validate");
const md5 = require("md5");
const createError = require("http-errors");
module.exports = {
  index: async (req, res) => {
    const { keyword, status } = req.query;
    const PER_PAGE = 3;
    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active" ? 1 : 0;
    }

    if (keyword) {
      filters[Op.or] = [
        {
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.like]: `%${keyword}%`,
          },
        },
      ];
    }

    const user_id = req.session.userLogin.id;

    const roleUser = req.session.userLogin.role;

    let whereCondition = { ...filters, user_id: user_id };
    if (roleUser === 1) {
      whereCondition = { ...filters };
    }

    const totalCountObj = await Customer.findAndCountAll({
      where: whereCondition,
    });
    console.log(totalCountObj);

    const totalCount = totalCountObj.count;

    const totalPage = Math.ceil(totalCount / PER_PAGE);

    let { page } = req.query;
    if (!page || page < 1 || page > totalPage) {
      page = 1;
    }

    const offset = (page - 1) * PER_PAGE;
    const customerList = await Customer.findAll({
      order: [
        ["createdAt", "DESC"],
        ["name", "ASC"],
      ],
      where: whereCondition,
      limit: +PER_PAGE,
      offset: offset,
      include: [
        {
          model: User,
          as: "user",
        },
      ],
    });

    const msg = req.flash("msg");

    res.render("customers/index", {
      customerList,
      moment,
      req,
      totalPage,
      page,
      getPaginateUrl,
      msg,
      roleUser,
    });
  },

  create: async (req, res) => {
    const provinceList = await Province.findAll();
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    res.render("customers/create", { provinceList, msg, errors, validate });
  },

  store: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      req.body.password = md5(req.body.password);
      const user_id = req.session.userLogin.id;
      Customer.create({ ...req.body, user_id: user_id });
      req.flash("msg", "Thêm khách hàng thành công");
      res.redirect("/customers");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
      res.redirect("/customers/create");
    }
  },

  edit: async (req, res, next) => {
    const { id } = req.params;

    const customerDetail = await Customer.findByPk(id);
    if (!customerDetail) {
      next(createError(404));
      return;
    }
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    const provinceList = await Province.findAll();

    res.render("customers/edit", {
      msg,
      errors,
      validate,
      provinceList,
      customerDetail,
    });
  },

  update: async (req, res) => {
    const { id } = req.params;

    const customerDetail = await Customer.findByPk(id);

    if (!customerDetail) {
      next(createError(404));
      return;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const customerData = req.body;
      if (customerData.password) {
        customerData.password = md5(customerData.password);
      } else {
        delete customerData.password;
      }

      await Customer.update(customerData, {
        where: {
          id: id,
        },
      });

      req.flash("msg", "Cập nhật thành công");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
    }

    res.redirect("/customers/edit/" + id);
  },

  destroy: async (req, res) => {
    const { id } = req.params;

    await Customer.destroy({
      where: {
        id: id,
      },
      force: false,
    });
    req.flash("msg", "Đã xóa thành công");
    res.redirect("/customers");
  },
  deleteItem: async (req, res) => {
    const idsToDelete = req.body.selectedItems;
    if (idsToDelete) {
      await Customer.destroy({
        where: {
          id: idsToDelete,
        },
        force: false,
      });
      req.flash("msg", "Xóa thành công khách hàng");
    } else {
      req.flash("msg", "Vui lòng chọn khách hàng");
    }

    res.redirect("/customers");
  },
};
