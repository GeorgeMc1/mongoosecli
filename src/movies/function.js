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
readMovies = async (read, search) => {
    try {
        let results;
        switch(read){
            case "title":
                results = await MovieCollection.find({title: search});
                break;
            case "actor":
                results = await MovieCollection.find({actor: search});
                break;
            case "director":
                results = await MovieCollection.find({director: search});
                break;
            case "rating":
                results = await MovieCollection.find({rating: search});
                break;
            default:
                results = await MovieCollection.find();
        }
        let temp = [];
        results.forEach(result => {
            temp.push({title: result.title, actor: result.actor, director: result.director, rating: result.rating});
        })
        console.table(temp);
    } catch (error) {
        console.log(error);
    }
}
updateMovie = async (query, update, newValue) => {
    try {
        if(update === "title"){
            console.log("changing title");
            await MovieCollection.updateOne({title: query}, {title: newValue});
        } else if(update === "actor"){
            console.log("changing actor");
            await MovieCollection.updateOne({title: query}, {actor: newValue});
        } else if(update === "director"){
            console.log("changing director");
            await MovieCollection.updateOne({title: query}, {director: newValue});
        } else if(update === "rating"){
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