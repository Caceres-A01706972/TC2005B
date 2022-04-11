

const db = require('../util/database');


module.exports = class Pelicula {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre) {
        this.nombre = nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO peliculas (nombre) VALUES (?)',
        [this.nombre]
    );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM peliculas');
            
    }

    static fetchOne(id){
        return db.execute('SELECT * FROM peliculas WHERE id=?', [id]);

    }

}