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
    nueva_cancion.save()
        .then(() => {
            response.setHeader('Set-Cookie', ['ultima_cancion='+nueva_cancion.nombre+'; HttpOnly']);
            response.redirect('/canciones/');
            response.end();
        }).catch(err => console.log(err));
};

exports.getCancion = (request, response) => {
    const id = request.params.cancion_id;
    Cancion.fetchOne(id)
    .then(([rows, fieldData]) => {
        const canciones = [];
        for (let cancion of rows){
            canciones.push(cancion.nombre);
        }
        console.log(canciones);
        response.render('canciones', {
            canciones: canciones,
            isLoggedIn: request.session.isLoggedIn === true ? ture : false
        });
    })
    .catch(err => {
        console.log(err);
    });

};


exports.get = (request, response) => {
    console.log("Someone entered Canciones ")
    console.log('Cookie: ' + request.get('Cookie'));
    // console.log(request.get('Cookie').split(';')[1].trim().split('=')[1]);
    
    //con cookie parser
    console.log(request.cookies);
    console.log(request.cookies.ultima_cancion)

    Cancion.fetchAll()
    .then(([rows, fieldData]) => {
        const canciones = [];
        for (let cancion of rows){
            canciones.push(cancion.nombre);
        }
        console.log(canciones);
        response.render('canciones', {
            canciones: canciones,
            isLoggedIn: request.session.isLoggedIn 
            
        });
    })
    .catch(err => {
        console.log(err);
    });

};