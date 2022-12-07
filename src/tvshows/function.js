const TvShowCollection = require("./model");
require("mongoose");

createShow = async (showObject) => {
    try {
        const newShow = await TvShowCollection.create(showObject);
        console.log(newShow);
    } catch (error) {
        console.log(error);
    }
}
readShows = async (query, search) => {
    try {
        let results;
        switch(query){
            case "title":
                results = await TvShowCollection.find({query: search});
                break;
            case "actor":
                results = await TvShowCollection.find({actor: search});
                break;
            case "director":
                results = await TvShowCollection.find({director: search});
                break;
            case "rating":
                results = await TvShowCollection.find({rating: search});
                break;
            default:
                results = await TvShowCollection.find();
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
updateShow = async (query, change, newValue) => {
    try {
        if(change === "title"){
            console.log("changing title");
            await TvShowCollection.updateOne({title: query}, {title: newValue});
        } else if(change === "actor"){
            console.log("changing actor");
            await TvShowCollection.updateOne({title: query}, {actor: newValue});
        } else if(change === "director"){
            console.log("changing director");
            await TvShowCollection.updateOne({title: query}, {director: newValue});
        } else if(change === "rating"){
            console.log("changing rating");
            await TvShowCollection.updateOne({title: query}, {rating: newValue});
        } else {
            console.log("please specify what you want to update");
        }
    } catch (error) {
        console.log(error);
    }
}
deleteShow = async (show) => {
    try {
        await TvShowCollection.deleteOne({title: show});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {createShow, readShows, updateShow, deleteShow};