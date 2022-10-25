
const mongoose = require('mongoose');
const Pokemon = mongoose.model('Pokemon');

const pokemonList = (req, res) => {
    Pokemon
        .find()
        .sort({id: 1})
        .exec((err, pokemon) => {
            if (!pokemon) {
                return res
                    .status(404)
                    .json({"message": "pokemon not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(pokemon);
        });
};

const pokemonReadOne = (req, res) => {
    if (req.params && req.params.pokemonid) {
        Pokemon
            .findOne({id: req.params.pokemonid})
            .exec((err, pokemon) => {
                if (!pokemon) {
                    return res
                        .status(404)
                        .json({"message": "pokemonid not found"});
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                }
                res
                    .status(200)
                    .json(pokemon);
            });
    } else {
        res
            .status(404)
            .json({"message": "No pokemonid in request"});
    }
};


module.exports = {
    pokemonList,
    pokemonReadOne
};

