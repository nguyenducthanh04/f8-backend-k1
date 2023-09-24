"use strict";

const md5 = require("md5");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("customers", [
      {
        name: "thanhnguyen",
        email: "thanhnguyen@gmail.com",
        password: md5("123456"),
        status: 1,
        province_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nguyen Duc Thanh",
        email: "thanhnguyennguyen@gmail.com",
        password: md5("123456"),
        status: 0,
        province_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Phan Khai",
        email: "phankhai@gmail.com",
        password: md5("123456"),
        status: 1,
        province_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nguyen Van A",
        email: "vana@gmail.com",
        password: md5("12345"),
        status: 1,
        province_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "hoangan",
        email: "hoangan.web@gmail.com",
        password: md5("12345"),
        status: 1,
        province_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("provinces", null, {});
  },
};
