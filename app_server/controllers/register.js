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
        user : req.username,
        title: 'Register',
        registerText: 'Please enter your username and password to register.',
        image: '/img/pokeball.png',
        haveAccount: 'Already have an account?'

    });
};


module.exports = {
    register
};

