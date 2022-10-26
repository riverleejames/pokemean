const express = require('express');
const router = express.Router();
const ctrlPokemon = require('../controllers/pokemon.js');
const ctrlLogin = require('../controllers/users.js');
const ctrlRegister = require('../controllers/users.js');
//const ctrlOthers = require('../controllers/others');
// locations
router
  .route('/pokemon')
  .get(ctrlPokemon.pokemonList);
router
  .route('/pokeinfo/:pokemonid')
  .get(ctrlPokemon.pokemonReadOne);
router
  .route('/login')
  .get(ctrlLogin.usersReadOne);
router
  .route('/register')
  .post(ctrlRegister.usersCreate);

module.exports = router;