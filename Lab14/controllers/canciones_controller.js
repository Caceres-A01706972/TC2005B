const Cancion = require('../models/cancion');


exports.getNuevaCancion = (request, response) => {
    console.log("Someone has entered Canciones New");
    response.render('cancionesNew');
};

exports.postNuevaCancion = (request, response) => {
    console.log("Posted");
    console.log(request.body);
    const nueva_cancion = new Cancion(request.body.nombre);
    nueva_cancion.save();
    //filesystem.writeFileSync('canciones.txt', canciones.toString());
    response.redirect('/canciones/');
    response.end();
};

exports.get = (request, response) => {
    console.log("Someone has entered Canciones")
    response.render('canciones', {
        canciones: Cancion.fetchAll()
    });
};