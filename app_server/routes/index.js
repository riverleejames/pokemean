const express = require('express');
const router = express.Router();

const ctrlPokemon = require('../controllers/pokemon');
const ctrlLogin = require('../controllers/login');
const ctrlRegister = require('../controllers/register');
const ctrlOthers = require('../controllers/others');


/* GET home page. */
router.get('/', ctrlPokemon.homelist); 


/* Pokemon Pages */
router.get('/pokeinfo/:pokemonid', ctrlPokemon.pokemonInfo);

/* Login Pages */
router.get('/login', ctrlLogin.login);

/* Register Pages */
router.get('/register', ctrlRegister.register);


/* Other pages */
router.get('/about', ctrlOthers.about);


module.exports = router;
