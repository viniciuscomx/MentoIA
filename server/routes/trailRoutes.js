const express = require('express');
const router = express.Router();
const trailController = require('../controllers/trailController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, trailController.getTrails);
router.post('/', authMiddleware, trailController.createTrail);

module.exports = router;
