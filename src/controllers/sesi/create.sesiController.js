const { Sessions } = require("../../models");

const service = async function (req, res, next) {
  try {
    const data = req.body;
    const requestDB = await Sessions.create(data);
    if (requestDB) {
      return res.json({ msg: "Sesi berhasil dibuat", data: requestDB });
    } else {
      return res.status(404).json({ msg: "Gagal membuat Sesi" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
