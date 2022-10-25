const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    id: {
        type: Number,
        index: true,
        unique: true,
        required: true
    },
    name: {
        type: String,
        index: true,
        required: true
    },
    type: {
        type: Array,
        index: true,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    flavor_text: {
        type: String
    },
    stats: {
        type: Array
    }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema, 'pokedex');

module.exports = Pokemon;



