const MovieCollection = require("./model");
require("mongoose");

createMovie = async (movieObject) => {
    try {
        const newMovie = await MovieCollection.create(movieObject);
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    }
}
readMovies = async () => {
    try {
        const results = await MovieCollection.find();
        let temp = [];
        results.forEach(result => {
            temp.push({title: result.title, actor: result.actor, director: result.director, rating: result.rating});
        })
        console.table(temp);
    } catch (error) {
        console.log(error);
    }
}
updateMovie = async (query, change, newValue) => {
    try {
        if(change === "title"){
            console.log("changing title");
            await MovieCollection.updateOne({title: query}, {title: newValue});
        } else if(change === "actor"){
            console.log("changing actor");
            await MovieCollection.updateOne({title: query}, {actor: newValue});
        } else if(change === "director"){
            console.log("changing director");
            await MovieCollection.updateOne({title: query}, {director: newValue});
        } else if(change === "rating"){
            console.log("changing rating");
            await MovieCollection.updateOne({title: query}, {rating: newValue});
        } else {
            console.log("please specify what you want to update");
        }
    } catch (error) {
        console.log(error);
    }
}
deleteMovie = async (movie) => {
    try {
        await MovieCollection.deleteOne({title: movie});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {createMovie, readMovies, updateMovie, deleteMovie};