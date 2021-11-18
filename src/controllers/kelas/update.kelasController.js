const {
     Kelas,
     Sequelize: { Op },
} = require("../../models");
const { body } = require("express-validator");

const service = async function (req, res, next) {
     try {
          const payload = req.body;
          const where = { id: req.params.id };
          const requestDB = await Kelas.update(payload, { where });
          if (requestDB[0]) {
               return res.json({ msg: "kelas berhasil diperbarui", data: payload });
          } else {
               return res.json({ msg: "Kelas gagal diperbarui" });
          }
     } catch (error) {
          return res.status(500).json({ msg: error.toString() });
     }
};

const validation = [
     body("namaKelas")
          .notEmpty()
          .withMessage("Nama kelas wajib diisi")
          .custom(async (value, { req }) => {
               const dataKelas = await Kelas.findOne({ where: { namaKelas: value, id: { [Op.ne]: req.params.id } } });
               if (dataKelas) {
                    return Promise.reject(`Nama Kelas ${value} sudah digunakan`);
               }
               return true;
          }),
];

module.exports = { service, validation };
