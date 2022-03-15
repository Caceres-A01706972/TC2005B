const Cancion = require('../models/cancion');


exports.getNuevaCancion = (request, response) => {
    console.log("Someone has entered Canciones New");
    response.render('cancionesNew', {
        isLoggedIn: request.session.isLoggedIn
    });
};

exports.postNuevaCancion = (request, response) => {
    console.log("Posted");
    console.log(request.body);
    const nueva_cancion = new Cancion(request.body.nombre);
    nueva_cancion.save();
    response.setHeader('Set-Cookie', ['ultima_cancion='+nueva_cancion.nombre+'; HttpOnly']);
    response.redirect('/canciones/');
    response.end();
};

exports.get = (request, response) => {
    console.log("Someone has entered Canciones")
    console.log('Cookie: ' + request.get('Cookie'));
    // console.log(request.get('Cookie').split(';')[1].trim().split('=')[1]);
    
    //con cookie parser
    console.log(request.cookies);
    console.log(request.cookies.ultima_cancion)

    response.render('canciones', {
        canciones: Cancion.fetchAll(),
        isLoggedIn: request.session.isLoggedIn === true ? ture : false
    });
};