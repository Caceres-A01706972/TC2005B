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
    response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Peliculas Favoritas</title><meta charset="utf-8"></meta></head>');
    response.write('<body>');
    response.write('<main>');
    response.write('<h1>Favorite Movies!</h1>');
    response.write('<p>Estas son las peliculas favoritas de Ricardo:</p>');
    response.write('<ol>');
    for (let movie in peliculas){
        response.write('<li>' +peliculas[movie] + '</li>');
    }
    response.write('</ol>');
    response.write('<a href="/peliculas/new">Agregar una Pelicula</a>');
    response.write('<br>');
    response.write("<a href='../'>Go back to Ricardo's Favorites</a>");
    response.write('<br>');
    response.write('<a href="pending">Series Favoritas (Not Found)</a>');
    response.write('</main>');
    response.write('</body>');
    response.end();

});


router.get("/new", (request, response) => {
    console.log("Someone has entered Peliculas New");
    response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Agregar Pelicula</title><meta charset="utf-8"></meta></head>');
    response.write('<body>');
    response.write('<h1>Favorite Movies!</h1>');
    response.write('<main>');
    response.write('<h2>Aqui Ingresaras Pelicuals a la Lista!</h2>');
    response.write('<p>Ingresa el nombre de la pelicula:</p>');
    response.write('<form action="/peliculas/new" method="POST">');
    response.write('<label for="nombre">Nombre de la pelicula: </label>');
    response.write('<input type="text" name="nombre" required>');
    response.write('<input type="submit" value="Enviar">');
    response.write('</form>');
    response.write('<br><br>');
    response.write('<a href="/peliculas">Regresar a la lista de Peliculas</a>');
    response.write('</br>');
    response.write('</body>');
    response.end();
    response.end();
});


router.post("/new", (request, response) => {
    console.log("Posted");
    console.log(request.body);
    peliculas.push(request.body.nombre);
    filesystem.writeFileSync('peliculas.txt', peliculas.toString());
    response.redirect('/peliculas/');
    response.end();
});


module.exports = router;