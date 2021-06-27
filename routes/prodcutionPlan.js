const express = require('express');
const router = express.Router();

const { productionPlanController } = require('../controller');

router.get('/api/plans', productionPlanController.handleGet);
router.post('/api/plans', productionPlanController.handlePost);
router.put('/api/plans/:id', productionPlanController.handlePut);

module.exports = router;
