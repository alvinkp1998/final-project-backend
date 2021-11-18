const express = require("express");
const router = express.Router();
const createKelas = require("./create.kelasController");
const getKelas = require("./get.kelasController");
const updateKelas = require("./update.kelasController");
const deleteKelas = require("./delete.kelasController");
const validator = require("../../helpers/validator");
const { checkJWT } = require("../../middlewares/jwt");

router.post("/", checkJWT, createKelas.validation, validator, createKelas.service);
router.get("/", getKelas.service);
router.get("/:id", getKelas.service);
router.delete("/:id", deleteKelas.service);
router.put("/:id", updateKelas.validation, validator, updateKelas.service);

module.exports = router;
