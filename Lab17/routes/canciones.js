const express = require('express');
const router = express.Router()

const path = require('path');

const canciones = ["Hotel California by The Eagles", "Lucid Dreams by Juice Wrld", "Flashing Lights by Kanye West"];

const cancionesController = require('../controllers/canciones_controller');


router.get("/new", cancionesController.getNuevaCancion);

router.post("/new", cancionesController.postNuevaCancion);

router.get("/:cancion_id", cancionesController.getCancion);

router.get("/", cancionesController.get);

module.exports = router;