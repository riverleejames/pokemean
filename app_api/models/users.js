const mongoose = require('mongoose');
require('./pokemon.js');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        index: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;