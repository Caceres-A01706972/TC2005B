const express = require('express');
const router = express.Router()

const filesystem = require('fs');

const path = require('path');

const peliculas = ["Back to The Future", "Karate Kid", "Scarface"];

router.get('/una-ruta', (request, response, next) => {
    console.log("Someone has enterd Una-Rutaa");
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get("/", (request, response) => {
    console.log("Someone entered Peliculas ")
    response.sendFile(path.join(__dirname, '..', 'views', 'peliculas.html'));
});


router.get("/new", (request, response) => {
    console.log("Someone has entered Peliculas New");
    response.sendFile(path.join(__dirname, '..', 'views', 'peliculasNew.html'));
});


router.post("/new", (request, response) => {
    console.log("Posted");
    console.log(request.body);
    peliculas.push(request.body.nombre);
    console.log(peliculas);
    //filesystem.writeFileSync('peliculas.txt', peliculas.toString());
    response.redirect('/peliculas/');
    response.end();
});


module.exports = router;