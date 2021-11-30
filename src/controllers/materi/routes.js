const express = require("express");
const router = express.Router();
const createMateri = require("./create.materiController");
const deleteMateri = require("./delete.materiController");
const getMateri = require("./get.materiController");
const updateMateri = require("./update.materiController");
const userJWT = require("../../middlewares/jwt");

router.get("/", userJWT.checkJWT, getMateri.service);
router.get("/:sessionId", userJWT.checkJWT, getMateri.service);
router.post("/", userJWT.checkJWT, createMateri.service);
router.put("/:id", userJWT.checkJWT, updateMateri.service);
router.delete("/:id", userJWT.checkJWT, deleteMateri.service);

module.exports = router;
