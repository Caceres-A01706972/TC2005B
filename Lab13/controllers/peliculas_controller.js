const Pelicula = require('../models/pelicula');

exports.getNuevaPelicula = (request, response) => {
    console.log("Someone has entered Peliculas New");
    response.render('peliculasNew');
};

exports.postNuevaPelicula = (request, response) => {
    console.log("Posted");
    console.log(request.body);
    const nueva_pelicula = new Pelicula(request.body.nombre);
    nueva_pelicula.save();
    //filesystem.writeFileSync('peliculas.txt', peliculas.toString());
    response.redirect('/peliculas/');
    response.end();
};

exports.get = (request, response) => {
    console.log("Someone entered Peliculas ")
    response.render('peliculas', {
        peliculas: Pelicula.fetchAll()
    });
};

