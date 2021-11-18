const { Users } = require("../../../models");
const { createJWT } = require("../../../middlewares/jwt");
const { compareSync } = require("bcrypt");

const service = async function (req, res, next) {
  try {
    const user = await Users.findOne({
      where: { email: req.body.email },
    });
    // if (user) {
    // const validUser = compareSync(req.body.password, user.password);
    //   if (validUser) {
    //     return res.json({ msg: "success", token: createJWT(user) });
    //   } else {
    //     return res.status(401).json({ msg: "Password tidak sesuai" });
    //   }
    // } else {
    //   return res.status(404).json({ msg: "Email tidak sesuai" });
    // }
    // const validUser = compareSync(req.body.password, user.password);
    if (user) return res.json({ msg: "success", token: createJWT(user) });
    if (!user) return res.json({ msg: "Email atau password tidak sesuai" });
    if (user.password !== password)
      return res.json({ msg: "Email atau password tidak sesuai" });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
