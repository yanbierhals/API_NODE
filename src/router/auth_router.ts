import express from 'express';
const authController = require('../controller/auth_controller');

const router = express.Router();

router.post('', authController.realizarLogin);

module.exports = router;