const canciones = ["Hotel California by The Eagles", "Lucid Dreams by Juice Wrld", "Flashing Lights by Kanye West"];

exports.getNuevaCancion = (request, response) => {
    console.log("Someone has entered Canciones New");
    response.render('cancionesNew');
};

exports.postNuevaCancion = (request, response) => {
    console.log("Posted");
    console.log(request.body);
    canciones.push(request.body.nombre);
    console.log(canciones);
    //filesystem.writeFileSync('canciones.txt', canciones.toString());
    response.redirect('/canciones/');
    response.end();
};

exports.get = (request, response) => {
    console.log("Someone has entered Canciones")
    response.render('canciones', {
        canciones: canciones
    });
};