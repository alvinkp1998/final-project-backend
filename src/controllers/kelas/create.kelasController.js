const { Kelas } = require("../../models/index");
const { body } = require("express-validator");

const service = async function (req, res, next) {
     try {
          return res.json(req.auth);
          const payload = req.body;
          const requestDB = await Kelas.create(payload);
          return res.json({ msg: "kelas berhasil ditambahkan", data: requestDB });
     } catch (error) {
          return res.status(500).json({ msg: error.toString() });
     }
};

const validation = [
     body("namaKelas")
          .notEmpty()
          .withMessage("Nama Kelas Wajib diisi")
          .custom(async (value) => {
               const dataKelas = await Kelas.findOne({ where: { nama: value } });
               if (dataKelas) {
                    return Promise.reject(`Nama Kelas ${value} sudah digunakan`);
               }
               return true;
          }),

     body("kodeKelas").notEmpty().withMessage("kode Kelas wajib diisi"),
     body("status").notEmpty().withMessage("Status tidak boleh kosong").isIn(["fullstack", "data science"]).withMessage("status tidak sesuai"),
];
module.exports = { service, validation };
