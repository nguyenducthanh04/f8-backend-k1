//Province Model
const { DataTypes } = require("sequelize");

const Province = async () => {
  const sequelize = await require("../utils/db");

  return sequelize.define(
    "Province",
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "province",
    }
  );
};

module.exports = Province();

//Convert từ Model Name sang TableName
//Category => Categories
//Customer => Customers

//Nguyên tắc khi đặt tên Model:
/*
Tên file Model trùng tên Model
Dùng PascalCase để đặt tên
Tên Model trùng với tên Table trong Database (Dùng số ít)
1 file model chỉ làm việc 1 table
*/
