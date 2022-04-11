const express = require('express');
const router = express.Router()

const path = require('path');
const isAuth = require('../controllers/is-auth.js');
const usersController = require('../controllers/users_controller');

const peliculas = ["Back to The Future", "Karate Kid", "Scarface"];

router.get("/login", usersController.getLogin);

router.post("/login", usersController.login);

router.get('/logout', usersController.logout);

router.get('/signup', usersController.get_signup);

router.post('/signup', usersController.post_signup);


module.exports = router;