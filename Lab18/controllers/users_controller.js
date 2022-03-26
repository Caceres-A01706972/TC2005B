exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Inicia Sesion',
        isLoggedIn: request.session.isLoggedIn
    });
};

exports.postLogin =  (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario;
    console.log(request.session.usuario);
    response.redirect('/');
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};