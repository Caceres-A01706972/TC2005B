const express = require('express');
const router = express.Router()

const path = require('path');

const canciones = ["Hotel California by The Eagles", "Lucid Dreams by Juice Wrld", "Flashing Lights by Kanye West"];

const cancionesController = require('../controllers/canciones_controller');
const isAuth = require('../controllers/is-auth');


router.get("/new", isAuth, cancionesController.getNuevaCancion);

router.post("/new", cancionesController.postNuevaCancion);

router.get("/:cancion_id", isAuth, cancionesController.getCancion);

router.get("/", isAuth, cancionesController.get);

module.exports = router;