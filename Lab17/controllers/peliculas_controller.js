const Pelicula = require('../models/pelicula');

exports.getNuevaPelicula = (request, response) => {
    console.log("Someone has entered Peliculas New");
    response.render('peliculasNew', {
        isLoggedIn: request.session.isLoggedIn
    });
};

exports.postNuevaPelicula = (request, response) => {
    console.log("Posted");
    console.log(request.body);
    const nueva_pelicula = new Pelicula(request.body.nombre);
    nueva_pelicula.save();
    response.setHeader('Set-Cookie', ['ultima_pelicula='+nueva_pelicula.nombre+'; HttpOnly']);
    response.redirect('/peliculas/');
    response.end();
};

exports.get = (request, response) => {
    console.log("Someone entered Peliculas ")
    console.log('Cookie: ' + request.get('Cookie'));
    // console.log(request.get('Cookie').split(';')[1].trim().split('=')[1]);
    
    //con cookie parser
    console.log(request.cookies);
    console.log(request.cookies.ultima_pelicula)

    Pelicula.fetchAll()
    .then(([rows, fieldData]) => {
        const peliculas = [];
        for (let pelicula of rows){
            peliculas.push(pelicula.nombre);
        }
        console.log(peliculas);
        response.render('peliculas', {
            peliculas: peliculas,
            isLoggedIn: request.session.isLoggedIn === true ? ture : false
        });
    })
    .catch(err => {
        console.log(err);
    });

};

