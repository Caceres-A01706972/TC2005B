const express = require('express');
const router = express.Router()

const path = require('path');

const homeController = require('../controllers/home_controller');
const isAuth = require('../controllers/is-auth.js');
const peliculas = ["Back to The Future", "Karate Kid", "Scarface"];

router.get("/", isAuth, homeController.get);


module.exports = router;