const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const signupController = require('../controllers/signUp_controller');
const signinController = require('../controllers/signIn_controller');

router.get('/signup', signupController.signUp);

router.get('/signin', signinController.signIn);

router.post('/create', homeController.create);


module.exports = router;