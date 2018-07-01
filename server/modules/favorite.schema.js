const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    url: {
        type: String,
        unique: true,
        required: true
    },
    title: String,
    episode_id: Number,
    director: String,
    name: String,
    birth_year: String,
    eye_color: String,
    gender: String,
    population: Number,
    terrain: String,
    classification: String,
    language: String,
    model: String,
    manufacturer: String,
    class: String
})

module.exports = schema;