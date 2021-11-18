const jwt = require("jsonwebtoken");

const createJWT = (users) => {
     delete users.dataValues.password;
     const token = jwt.sign({ users: users.dataValues }, "secret-key", { expiresIn: "24h" });
     return token;
};

const checkJWT = (req, res, next) => {
     const token = req.get("Authorization");
     if (!token) {
          return res.status(401).json({ msg: "Unauthorized" });
     } else {
          jwt.verify(token, "secret-key", (err, decode) => {
               if (err) return res.status(401).json({ msg: err.message });
               else {
                    req.auth = decode.users;
                    next();
               }
          });
     }
};

module.exports = { createJWT, checkJWT };
