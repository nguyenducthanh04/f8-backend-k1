"use strict";

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
    return queryInterface.bulkInsert("provinces", [
      {
        name: "Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hưng Yên",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Đà Nẵng",
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
