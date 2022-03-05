const express  = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const peliculas = ["Back to The Future", "Karate Kid", "Scarface"];

app.get('/', (request, response) => {
    console.log("Main Page");
    response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Ricardos Favorites</title><meta charset="utf-8"></meta></head>');
    response.write('<body>');
    response.write('<main>');
    response.write("<h1>Ricardo's Favorites!</h1>");
    response.write('<div style="display: flex"><a href="/peliculas"><button style= "margin-right:20px"> Peliculas </button></a> <a href="canciones"><button> Canciones </button></a>');
    response.write('</main>');
    response.write('</body>');
    response.end();
});


const peliculasRouter = require('./routes/peliculas');
app.use('/peliculas', peliculasRouter); //Anything that starts with /peliculas works with userRoutes

const cancionesRouter = require('./routes/canciones');
app.use('/canciones', cancionesRouter); //Anything that starts with /peliculas works with userRoutes


app.listen(3000);