const express = require('express');
const router = express.Router()

const path = require('path');

const usersController = require('../controllers/users_controller');
const isAuth = require('../controllers/isAuth.js');

const peliculas = ["Back to The Future", "Karate Kid", "Scarface"];


router.post("/welcome", usersController.login);

router.get('/logout', usersController.logout);

router.post('/signup', usersController.post_signup);

// router.get('/welcome', isAuth, usersController.welcome);

module.exports = router;