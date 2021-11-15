"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sesi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ sesi, joinKelas, kelas, materi }) {
      sesi.belongsToMany(joinKelas, { through: "presensi" });
      sesi.belongsTo(kelas);
      sesi.hasMany(materi);
    }
  }
  sesi.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      namaSesi: DataTypes.STRING,
      waktuMulai: DataTypes.DATEONLY,
      waktuSelesai: DataTypes.DATEONLY,
      urutanSesi: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "sesi",
    }
  );
  return sesi;
};
