const { Sessions } = require("../../models");

const service = async function (req, res, next) {
  try {
    const payload = req.body;
    const where = { id: req.params.id };
    const requestDB = await Sessions.update(payload, { where });
    if (requestDB[0]) {
      return res.json({ msg: "Sessions berhasil diupdate", data: payload });
    } else {
      return res.json({ msg: "Sessions gagal diupdate" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
