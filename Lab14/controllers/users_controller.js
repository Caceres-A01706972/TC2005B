exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Inicia Sesion'
    });
};

exports.postLogin =  (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario;

    response.redirect('/');
};