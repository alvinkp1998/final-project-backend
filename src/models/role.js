"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ role, joinKelas }) {
      role.hasMany(joinKelas);
    }
  }
  role.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      namaRole: DataTypes.ENUM(["Tutor", "Fasilitator", "Student"]),
    },
    {
      sequelize,
      modelName: "role",
    }
  );
  return role;
};
