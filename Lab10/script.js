//fs: filesystem

const filesystem = require('fs'); //fs es el modulo

const http = require('http');
const peliculas = ["Back to The Future", "Karate Kid", "Scarface"];
const canciones = ["Hotel California by The Eagles", "Lucid Dreams by Juice Wrld", "Flashing Lights by Kanye West"];

const server = http.createServer( (request, response) => {
    console.log(request);
    console.log("Someon entered your webpage!");
    
	if (request.url == '/'){
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Peliculas Favoritas</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<main>');
        response.write('<h1>Favorite Movies!</h1>');
        response.write('<p>Estas son las peliculas favoritas de Ricardo:</p>');
        response.write('<ol>');
        for (let movie in peliculas){
            response.write('<li>' + peliculas[movie] + '</li>');
        }
        response.write('</ol>');
        response.write('<a href="newMovie">Agregar una Pelicula</a>');
        response.write('<br>');
        response.write('<a href="songs">Ver Favorite Songs!</a>');
        response.write('<br>');
        response.write('<a href="pending">Series Favoritas (Not Found)</a>');
        response.write('</main>');
        response.write('</body>');
        response.end();
    } else if (request.url == '/newMovie' && request.method == 'GET'){
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Agregar Pelicula</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>Favorite Movies!</h1>');
        response.write('<main>');
        response.write('<h2>Aqui Ingresaras Pelicuals a la Lista!</h2>');
        response.write('<p>Ingresa el nombre de la pelicula:</p>');
        response.write('<form action="/newMovie" method="POST">');
        response.write('<label for="nombre">Nombre de la pelicula: </label>');
        response.write('<input type="text" name="nombre" required>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la lista de Peliculas</a>');
        response.write('</br>');
        response.write('</body>');
        response.end();
    } else if (request.url == '/newMovie' && request.method == 'POST'){
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datosCompletos = Buffer.concat(datos).toString();
            console.log(datosCompletos);
            const nuevoDato = datosCompletos.split('=')[1];
            console.log(nuevoDato);
            peliculas.push(nuevoDato);
            console.log(peliculas);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Peliculas Favoritas</title><meta charset="utf-8"></meta></head>');
            response.write('<body>');
            response.write('<h1>Favorite Movies!</h1>');
            response.write('<main>');
            response.write('<h2>Estas son las peliculas favoritas de Ricardo: </h2>');
            response.write('<h3>' + nuevoDato + ' fue agregado a la lista.</h3>');
            response.write('<p>Estos son las peliculas:</p>');
            response.write('<ol>');
            for (let movie in peliculas) {
                response.write('<li>' + peliculas[movie] + '</li>');
            }
            response.write('</ol>');
            response.write('<a href="newMovie">Agregar una Pelicula</a>');
            response.write('<br>');
            response.write('<a href="songs">Ver Favorite Songs!</a>');
            response.write('<br>');
            response.write('<a href="pending">Series Favoritas (Not Found)</a>');
            response.write('</main>');
            response.write('</body>');
            return response.end();
        })
    } else if (request.url == '/songs' && request.method == 'GET'){
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Canciones Favoritas</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<main>');
        response.write('<h1>Favorite Songs!</h1>');
        response.write('<p>Estas son las canciones favoritas de Ricardo:</p>');
        response.write('<ol>');
        for (let song in canciones){
            response.write('<li>' + canciones[song] + '</li>');
        }
        response.write('</ol>');
        response.write('<a href="newSong">Agregar una Cancion</a>');
        response.write('<br>');
        response.write('<a href="/">Ver Peliculas Favoritas</a>');
        response.write('<br>');
        response.write('<a href="pending">Series Favoritas (Not Found)</a>');
        response.write('</main>');
        response.write('</body>');
        response.end();
    } else if(request.url == '/newSong' && request.method == 'GET'){
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Agregar Cancion</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>Favorite Songs!</h1>');
        response.write('<main>');
        response.write('<h2>Aqui Ingresaras Canciones a la Lista!</h2>');
        response.write('<p>Ingresa el nombre de la cancion:</p>');
        response.write('<form action="/newSong" method="POST">');
        response.write('<label for="nombre">Nombre de la cancion: </label>');
        response.write('<input type="text" name="nombre" required>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="songs">Regresar a la lista de Canciones</a>');
        response.write('</br>');
        response.write('</body>');
        response.end();
    } else if (request.url == '/newSong' && request.method == 'POST'){
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datosCompletos = Buffer.concat(datos).toString();
            console.log(datosCompletos);
            const nuevoDato = datosCompletos.split('=')[1];
            console.log(nuevoDato);
            canciones.push(nuevoDato);
            console.log(canciones);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Canciones Favoritas</title><meta charset="utf-8"></meta></head>');
            response.write('<body>');
            response.write('<h1>Favorite Songs!</h1>');
            response.write('<main>');
            response.write('<h2>Estas son las canciones favoritas de Ricardo: </h2>');
            response.write('<h3>' + nuevoDato + ' fue agregado a la lista.</h3>');
            response.write('<p>Estas son las canciones:</p>');
            response.write('<ol>');
            for (let song in canciones) {
                response.write('<li>' + canciones[song] + '</li>');
            }
            response.write('</ol>');
            response.write('<a href="newSong">Agregar una Cancion</a>');
            response.write('<br>');
            response.write('<a href="/">Ver Favorite Movies!</a>');
            response.write('<br>');
            response.write('<a href="pending">Series Favoritas (Not Found)</a>');
            response.write('</main>');
            response.write('</body>');
            return response.end();
        })
    }
    
    else {
        response.statusCode = 404; 
        response.write('<body> ERROR 404: Page Not Found!</body>');
        response.end();
    }
	
});

server.listen(3000);