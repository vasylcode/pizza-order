const { Router } = require('express');
const router = Router();
const controller = require('./controller/orderController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add', controller.add);
router.get('/delete',authMiddleware, controller.delete);
router.get('/get', controller.get);

module.exports = router;