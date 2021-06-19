const { Router } = require('express');
const router = Router();
const controller = require('./controller/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);
// router.get('/users', authMiddleware, controller.getUsers);

module.exports = router;