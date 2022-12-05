const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://vast-citadel-50477.herokuapp.com';
}

/* GET 'Login' page */
const login = function (req, res) {
    res.render('login', {
        user : req.username,
        title: 'Login',
        loginText: 'Please enter your username and password to login.',
        image: '/img/pokeball.png',
        haveAccount: 'Don\'t have an account?'
    });

};

module.exports = {
    login
};




