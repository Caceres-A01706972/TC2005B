const express  = require('express');
const app = express();



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

const peliculasRouter = require('./routes/peliculas');
app.use('/peliculas', peliculasRouter); //Anything that starts with /peliculas works with userRoutes



app.listen(3000);