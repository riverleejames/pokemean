const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://vast-citadel-50477.herokuapp.com/pokemon';
}

/* GET 'Login' page */
const login = function (req, res) {
    res.render('login', {
        title: 'Login',
        loginText: 'Please enter your username and password to login.',
        image: '/img/pokeball.png',
        haveAccount: 'Don\'t have an account?'
    });

};


//post information from login form and check if user exists in mongodb
const doLogin = (req, res) => {
    const path = '/api/login';
    const data = {
        email: req.body.email,
        password: req.body.password
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: data
    };
    request(
        requestOptions,
        (err, {statusCode}, body) => {
            if (statusCode === 200) {
                res.redirect('/pokemon');
            } else {
                res.redirect('/login');
            }
        }
    );
}

module.exports = {
    login,
    doLogin
};




