import express from 'express';
const router = express.Router();

const authController = require('../auth/auth');

// Define a rota para realizar login
router.post('/login', authController.realizarLogin);

module.exports = router;
