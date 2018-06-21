const mongoose = require('mongoose');

//define schema for the game model
//this and all other models inherit from mongoose.Schema

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Doh! You forgot to put in the game title',
    },
    publisher: {
        type:String,
        required: 'Please enter publisher',
    },
    imageUrl: {
        type: String,
        required: 'Please enter URL of game cover image',
    },
    year: {
        type: Number,
    },
});

//make the class public
module.exports = mongoose.model('Game', gameSchema);