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
        name: "Hoàng An",
        email: "hoangan2.web@gmail.com",
        password: md5("12345"),
        status: 1,
        province_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Anh Quan",
        email: "anhquan@gmail.com",
        password: md5("123456"),
        status: 1,
        province_id: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nguyen Van A",
        email: "vana@gmail.com",
        password: md5("123456"),
        status: 1,
        province_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "thanhtung",
        email: "thanhtung@gmail.com",
        password: md5("123456"),
        status: 0,
        province_id: 2,
        user_id: 1,
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
  },
};
