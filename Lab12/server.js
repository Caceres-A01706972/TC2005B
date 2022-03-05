const express  = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');

app.use(express.static('public'));

app.get('/', (request, response) => {
    console.log("Someone has entered Home");
    response.sendFile(path.join(__dirname, 'views', 'home.html'));
});


app.get('/pending', (request, response) => {
    response.status(404);
    response.write("Ups Error 404, Not Found");
    response.end();
})


const peliculasRouter = require('./routes/peliculas');
app.use('/peliculas', peliculasRouter); //Anything that starts with /peliculas works with userRoutes

const cancionesRouter = require('./routes/canciones');
app.use('/canciones', cancionesRouter); //Anything that starts with /peliculas works with userRoutes

app.listen(3000);