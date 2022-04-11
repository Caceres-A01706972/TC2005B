const User = require('../models/user');
const bcrypt = require('bcryptjs');


exports.login =  (request, response, next) => {
    User.findOne(request.body.nombre)
        .then(([rows, fieldData]) => {
            console.log(rows);
            if (rows.length < 1) {
                return response.redirect('/pending');
            }
            const user = new User(rows[0].username, rows[0].password, rows[0].nombre);
            bcrypt.compare(request.body.passwd, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        request.session.usuario = user.nombre;
                        return request.session.save(err => {
                            response.redirect('/test');
                        });
                    }
                    console.log("Success");
                    // response.render('index', {
                    //     name: request.session.usuario,
                    //     isLoggedIn: request.session.isLoggedIn
                    // });
                    // request.session.save(send => {
                    //     response.render('welcome', {
                    //         isLoggedIn: true
                    //     })
                    // });
                    response.render('welcome', {
                        isLoggedIn: true,
                        name: user.nombre
                    })
                    
                }).catch(err => {
                    console.log("Catch")
                    response.redirect('/test');
                });
        }).catch((err) => {
            console.log(err);
        });
};

exports.post_signup =  (request, response, next) => {
    const nuevo_usuario = 
        new User(request.body.username, request.body.password, request.body.nombre);

    nuevo_usuario.save()
        .then(() => {
            response.redirect('/');
        }).catch((err) => {
            console.log(err);
        });
};


exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.welcome = (request, response, next) => {
    response.render('welcome'); //Este código se ejecuta cuando la sesión se elimina.

};