"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mail.init(
    {
      id: {
        type: DataTypes.TINYINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      email: DataTypes.STRING(50),
      title: DataTypes.STRING(100),
      content: DataTypes.STRING(100),
    },
    {
      sequelize,
      modelName: "Mail",
    },
    {
      timestamps: false,
    }
  );
  return Mail;
};
