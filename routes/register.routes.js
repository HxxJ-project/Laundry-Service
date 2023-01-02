const express = require('express');
const router = express.Router();
const authmiddleware = require("../middleware/auth-middleware")

const regiController = require('../controllers/register');
const registerController = new regiController();
router.post('/register',registerController.createRegister);

module.exports = router;