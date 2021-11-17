"use strict";
const { Model } = require("sequelize");
const { genSaltSync, hashSync } = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
     class users extends Model {
          /**
           * Helper method for defining associations.
           * This method is not a part of Sequelize lifecycle.
           * The `models/index` file will call this method automatically.
           */
          static associate(models) {
               // define association here
          }
     }
     users.init(
          {
               id: {
                    type: DataTypes.UUID,
                    primaryKey: true,
                    defaultValue: DataTypes.UUIDV4,
               },
               nama: DataTypes.STRING,
               tempatLahir: DataTypes.STRING,
               tanggalLahir: DataTypes.DATEONLY,
               foto: DataTypes.STRING,
               noHp: DataTypes.INTEGER(12),
               alamat: DataTypes.STRING,
               email: DataTypes.STRING,
               password: {
                    type: DataTypes.STRING(12),
                    set(val) {
                         this.setDataValue("password", hashSync(val, genSaltSync(10)));
                    },
               },
               pendidikanTerakhir: DataTypes.STRING,
               institusi: DataTypes.STRING,
               pekerjaan: DataTypes.STRING,
               status: DataTypes.ENUM(["admin", "user"]),
          },
          {
               sequelize,
               modelName: "users",
          }
     );
     return users;
};
