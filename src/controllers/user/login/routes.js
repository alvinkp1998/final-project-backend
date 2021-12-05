const express = require("express");
const router = express.Router();
const loginUser = require("./login.userController");
const validator = require("../../../helpers/validator");

router.post("/", loginUser.validation, validator, loginUser.service);

module.exports = router;
