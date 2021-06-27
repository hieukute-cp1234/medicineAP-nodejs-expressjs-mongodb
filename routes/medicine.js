const express = require('express');
const router = express.Router();
const { medicineController } = require('../controller');

router.get('/', medicineController.handleGet);

module.exports = router;
