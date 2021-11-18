const { users } = require("../../models");
const { compareSync } = require("bcrypt");
const { createJWT } = require("../../middlewares/jwt");
const service = async function (req, res, next) {
     try {
          const users = await users.findOne({ where: { email: req.body.email } });
          const validusers = compareSync(req.body.password, users.password);
          if (validusers) return res.json({ access: createJWT(users) });
          else return res.status(404).json({ msg: "email dan password anda tidak cocok" });
     } catch (error) {
          return res.status(500).json({ msg: error.toString });
     }
};

module.exports = { service };
