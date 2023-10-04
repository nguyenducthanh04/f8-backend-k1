"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("author_book", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      author_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "authors",
          },
          key: "id",
        },
      },
      book_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "books",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("author_book");
  },
};
