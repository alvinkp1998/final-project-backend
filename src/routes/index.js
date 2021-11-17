const express = require("express");
const router = express.Router();
const usersRoutes = require("../controllers/users/routes");
const kelasRoutes = require("../controllers/kelas/routes");

router.use("/users", usersRoutes);
router.use("/kelas", kelasRoutes);

module.exports = router;
