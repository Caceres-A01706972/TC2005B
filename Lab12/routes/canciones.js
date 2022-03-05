const express = require('express');
const router = express.Router()

const filesystem = require('fs');

const path = require('path');

const canciones = ["Hotel California by The Eagles", "Lucid Dreams by Juice Wrld", "Flashing Lights by Kanye West"];


router.get("/", (request, response) => {
    console.log("Someone has entered Canciones")
    response.sendFile(path.join(__dirname, '..', 'views', 'canciones.html'));
});

router.get("/new", (request, response) => {
    console.log("Someone has entered Canciones New");
    response.sendFile(path.join(__dirname, '..', 'views', 'cancionesNew.html'));
});

router.post("/new", (request, response) => {
    console.log("Posted");
    console.log(request.body);
    canciones.push(request.body.nombre);
    console.log(canciones);
    //filesystem.writeFileSync('canciones.txt', canciones.toString());
    response.redirect('/canciones/');
    response.end();
});

module.exports = router;