const express = require('express');
const router = express.Router()

const filesystem = require('fs');

const canciones = ["Hotel California by The Eagles", "Lucid Dreams by Juice Wrld", "Flashing Lights by Kanye West"];


router.get("/", (request, response) => {
    console.log("Someone has entered Canciones")
    response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Canciones Favoritas</title><meta charset="utf-8"></meta></head>');
    response.write('<body>');
    response.write('<main>');
    response.write('<h1>Favorite Songs!</h1>');
    response.write('<p>Estas son las canciones favoritas de Ricardo:</p>');
    response.write('<ol>');
    for (let song in canciones){
        response.write('<li>' + canciones[song] + '</li>');
    }
    response.write('</ol>');
    response.write('<a href="/canciones/new">Agregar una Cancion</a>');
    response.write('<br>');
    response.write("<a href='../'>Go back to Ricardo's Favorites</a>");
    response.write('<br>');
    response.write('<a href="/pending">Series Favoritas (Not Found)</a>');
    response.write('</main>');
    response.write('</body>');
    response.end();
});

router.get("/new", (request, response) => {
    console.log("Someone has entered Canciones New");
    response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Agregar Canciones</title><meta charset="utf-8"></meta></head>');
    response.write('<body>');
    response.write('<h1>Favorite Songs!</h1>');
    response.write('<main>');
    response.write('<h2>Aqui Ingresaras Canciones a la Lista!</h2>');
    response.write('<p>Ingresa el nombre de la cancion:</p>');
    response.write('<form action="/canciones/new" method="POST">');
    response.write('<label for="nombre">Nombre de la cancion: </label>');
    response.write('<input type="text" name="nombre" required>');
    response.write('<input type="submit" value="Enviar">');
    response.write('</form>');
    response.write('<br><br>');
    response.write('<a href="/canciones">Regresar a la lista de canciones</a>');
    response.write('</br>');
    response.write('</body>');
    response.end();
});

router.post("/new", (request, response) => {
    console.log("Posted");
    console.log(request.body);
    canciones.push(request.body.nombre);
    //filesystem.writeFileSync('canciones.txt', canciones.toString());
    response.redirect('/canciones/');
    response.end();
});


module.exports = router;