const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const signupController = require('../controllers/signUp_controller');
const signinController = require('../controllers/signIn_controller');
const passport = require('passport');

router.get('/signup', signupController.signUp);

router.get('/signin', signinController.signIn);

router.get('/signout', signinController.destroySession);

router.post('/create', signupController.create);

router.post('/create-session', passport.authenticate('local' , {failureRedirect:'/user/signin'}), signinController.createSession);


module.exports = router;