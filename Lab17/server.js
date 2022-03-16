const express  = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

const path = require('path');

const session = require('express-session');
app.use(session({
    secret: 'jwkjbwebcwjheciuchoiwjcklslaelpeemwd', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (request, response) => {
    console.log("Someone has entered Home");
    response.render('home', {
        isLoggedIn: request.session.isLoggedIn
    });
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

const userRoutes = require('./routes/users');
app.use('/users/', userRoutes);

app.listen(3000);