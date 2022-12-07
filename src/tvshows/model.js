const mongoose = require("mongoose");
const tvShowSchema = new mongoose.Schema({
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

const TvShowCollection = mongoose.model("TVShows", tvShowSchema);

module.exports = TvShowCollection;