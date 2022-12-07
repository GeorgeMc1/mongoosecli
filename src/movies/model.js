const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        require: true
    },
    actor: {
        type: String,
        default: "Not Specified"
    },
    director: {
        type: String,
        default: "Not Specified"
    }
})