const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.getLogin = (request, response, next) => {
    const usuario = request.session.usuario ? request.session.usuario : '';
    console.log(request.session.usuario);
    response.render('login', {
        titulo: 'Inicia Sesion',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};


exports.login =  (request, response, next) => {
    User.findOne(request.body.nombre)
        .then(([rows, fieldData]) => {
            console.log(rows);
            if (rows.length < 1) {
                return response.redirect('/users/login');
            }
            const user = new User(rows[0].username, rows[0].password, rows[0].nombre);
            bcrypt.compare(request.body.passwd, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        request.session.usuario = user.nombre;
                        return request.session.save(err => {
                            response.redirect('/users/signup');
                        });
                    }
                    console.log("Success");
                    response.render('home', {
                        name: request.session.usuario,
                        isLoggedIn: request.session.isLoggedIn
                    });
                }).catch(err => {
                    console.log("Catch")
                    response.redirect('/home');
                });
        }).catch((err) => {
            console.log(err);
        });
};


exports.get_signup =  (request, response, next) => {
    response.render('signup', {
        usuario: request.session.usuario ? request.session.usuario : '',
    });
};


exports.post_signup =  (request, response, next) => {
    const nuevo_usuario = 
        new User(request.body.username, request.body.password, request.body.nombre);

    nuevo_usuario.save()
        .then(() => {
            response.redirect('/users/login');
        }).catch((err) => {
            console.log(err);
        });
};


exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};