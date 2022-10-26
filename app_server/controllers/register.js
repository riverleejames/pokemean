const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://vast-citadel-50477.herokuapp.com';
}

/* GET 'Register' page */
const register = function (req, res) {
    res.render('register', {
        title: 'Register',
        registerText: 'Please enter your username and password to register.',
        image: '/img/pokeball.png',
        haveAccount: 'Already have an account?'

    });
};

//post information from register form and check if user exists in mongodb
const doRegister = (req, res) => {
    const path = '/api/register';
    const data = {
        email: req.body.email,
        password: req.body.password
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: data
    };
    request(
        requestOptions,
        (err, {statusCode}, body) => {
            if (statusCode === 200) {
                res.redirect('/pokemon');
            } else {
                res.redirect('/register');
            }
        }
    );
}







module.exports = {
    register,
    doRegister
};

