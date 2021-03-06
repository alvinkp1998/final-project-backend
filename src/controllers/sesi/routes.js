const express = require("express");
const router = express.Router();
const createSesi = require("./create.sesiController");
const deleteSesi = require("./delete.sesiController");
const getSesi = require("./get.sesiController");
const updateSesi = require("./update.sesiController");
const userJWT = require("../../middlewares/jwt");

router.get("/", userJWT.checkJWT, getSesi.service);
router.get("/:classId", userJWT.checkJWT, getSesi.service);
router.post("/", userJWT.checkJWTAdmin, createSesi.service);
router.put("/:id", userJWT.checkJWTAdmin, updateSesi.service);
router.delete("/:id", userJWT.checkJWTAdmin, deleteSesi.service);

module.exports = router;
