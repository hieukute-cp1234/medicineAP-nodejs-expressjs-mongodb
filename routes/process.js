const express = require('express');
const router = express.Router();

const { processController } = require('../controller');

router.get('/', processController.handleGet);
router.post('/', processController.handlePost);

module.exports = router;
