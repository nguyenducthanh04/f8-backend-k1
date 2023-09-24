const { Customer, Province } = require("../models");
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
    const totalCountObj = await Customer.findAndCountAll({
      where: filters,
    });

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
      where: filters,
      limit: +PER_PAGE,
      offset: offset,
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
    });
  },

  create: async (req, res) => {
    console.log(await Customer);
    console.log(await Province);
    console.log(await Province.findAll());
    const provinceList = await Province.findAll();
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    res.render("customers/create", { provinceList, msg, errors, validate });
  },

  store: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      req.body.password = md5(req.body.password);
      Customer.create(req.body);
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
      req.flash("msg", "Đã cập nhật thành công !");
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
    req.flash("msg", "Đã xóa thành công khách hàng!");
    res.redirect("/customers");
  },
  deleteItem: async (req, res) => {
    console.log(req.body);
    console.log(req.body.selectedItems);
    const idsToDelete = [req.body.selectedItems];
    await Customer.destroy({
      where: {
        id: {
          [Op.in]: idsToDelete,
        },
      },
      force: false,
    });
    req.flash("msg", "Đã xóa thành công khách hàng!");
    res.redirect("/customers");
  },
};
