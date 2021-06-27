const express = require('express');
const router = express.Router();

const { stepController } = require('../controller');

router.get('/', stepController.handleGet);

module.exports = router;
