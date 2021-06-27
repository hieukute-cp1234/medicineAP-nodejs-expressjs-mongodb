const express = require("express");
const router = express.Router();

const { profileController } = require("../controller");

router.get("/api/profiles", profileController.handleGet);
router.post("/api/profiles", profileController.handlePost);
router.put("/api/profiles/:id", profileController.handlePut);

module.exports = router;
