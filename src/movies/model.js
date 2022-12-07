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
    },
    rating: {
        type: Number,
        default: 5,
        min: 0,
        max: 5
    }
})

const MovieCollection = mongoose.model("Movies", movieSchema);

module.exports = MovieCollection;