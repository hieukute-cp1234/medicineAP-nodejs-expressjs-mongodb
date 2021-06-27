const express = require("express");
const router = express.Router();

const { orderController } = require("../controller");

router.get("/api/orders", orderController.handleGet);
router.post("/api/orders", orderController.handlePost);

module.exports = router;
