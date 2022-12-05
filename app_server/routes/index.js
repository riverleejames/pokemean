const express = require('express');
const passport = require('passport');
const Account = require('../../app_api/models/account');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;



const ctrlPokemon = require('../controllers/pokemon');
const ctrlLogin = require('../controllers/login');
const ctrlRegister = require('../controllers/register');
const ctrlOthers = require('../controllers/others');

//ensure logged in to get to '/' route
router.get('/', ensureLoggedIn('/login'), (req, res) => {
    res.render('index', {user: req.user });
});


router.get('/register', (req, res) => {
    ctrlRegister.register(req, res);
});

router.get('/login', (req, res) => {
    ctrlLogin.login(req, res);
});

router.get('/about', (req, res) => {
    ctrlOthers.about(req, res);
});
    
/* Pokemon Pages */
router.get('/pokeinfo/:pokemonid', ctrlPokemon.pokemonInfo);

router.get('/ping', (req, res) => {
    res.status(200).send("pong!");
});

router.post('/register', (req, res, next) => {
    Account.register(new Account({ username : req.body.email}), req.body.password, (err, account) => {
        if (err) {
            return res.render('register', { account : account });
        }
        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});


router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {   
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        
    });
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});



module.exports = router;
