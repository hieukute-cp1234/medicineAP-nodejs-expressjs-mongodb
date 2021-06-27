const express = require('express');
const router = express.Router();

const { authController } = require('../controller');

router.post('/api/register', authController.register);
router.post('/api/login', authController.handleLogin);

module.exports = router;
