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
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "hoangan",
        email: "hoangan.web@gmail.com",
        password: md5("123456"),
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "nguyenduong",
        email: "duong@gmail.com",
        password: md5("123456"),
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "thanhnguyen",
        email: "thanhnguyen@gmail.com",
        password: md5("123456"),
        role: 1,
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
    return queryInterface.bulkDelete("Users", null, {});
  },
};
