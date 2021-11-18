const express = require("express");
const router = express.Router();
const createusers = require("./create.usersController");
const updateusers = require("./update.usersController");
const loginusers = require("./login.usersController");
const deleteusers = require("./delete.usersController");
const validator = require("../../helpers/validator");

router.post("/", createusers.service).post("/login", loginusers.service);
router.put("/:id", updateusers.validation, validator, updateusers.service);
router.delete("/:id", deleteusers.service);

module.exports = router;
