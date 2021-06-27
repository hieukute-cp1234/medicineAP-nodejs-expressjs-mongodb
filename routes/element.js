const express = require('express');
const router = express.Router();
const { elementController } = require('../controller');

router.get('/', elementController.handleGet);
router.post('/', elementController.handlePost);

module.exports = router;
