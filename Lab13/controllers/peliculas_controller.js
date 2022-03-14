const peliculas = ["Back to The Future", "Karate Kid", "Scarface"];


exports.getNuevaPelicula = (request, response) => {
    console.log("Someone has entered Peliculas New");
    response.render('peliculasNew');
};

exports.postNuevaPelicula = (request, response) => {
    console.log("Posted");
    console.log(request.body);
    peliculas.push(request.body.nombre);
    console.log(peliculas);
    //filesystem.writeFileSync('peliculas.txt', peliculas.toString());
    response.redirect('/peliculas/');
    response.end();
};

exports.get = (request, response) => {
    console.log("Someone entered Peliculas ")
    response.render('peliculas', {
        peliculas: peliculas
    });
};

