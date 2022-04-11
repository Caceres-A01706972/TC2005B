const express = require('express');
const router = express.Router()

const path = require('path');
const isAuth = require('../controllers/is-auth.js');

const peliculasController = require('../controllers/peliculas_controller');

const peliculas = ["Back to The Future", "Karate Kid", "Scarface"];

router.get('/una-ruta', (request, response, next) => {
    console.log("Someone has enterd Una-Rutaa");
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});



router.get("/new", isAuth, peliculasController.getNuevaPelicula);

router.post("/new", peliculasController.postNuevaPelicula);

router.get("/:pelicula_id", isAuth, peliculasController.getPelicula);

router.get("/", isAuth, peliculasController.get);

module.exports = router;