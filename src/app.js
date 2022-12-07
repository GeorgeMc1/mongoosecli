require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const {createMovie, readMovies, updateMovie, deleteMovie} = require("./movies/function");
const {createShow, readShows, updateShow, deleteShow} = require("./tvshows/function");

const app = async (input) => {
    if(input.create){
        console.log("Entering Create");
        // code to create entry
        if (input.show){
            await createShow({title: input.title, actor: input.actor, director: input.director, rating: input.rating});
        } else {
            await createMovie({title: input.title, actor: input.actor, director: input.director, rating: input.rating});
        }
    } else if(input.read){
        console.log("Entering Read");
        // code to read here
        if (input.show){
            await readShows(input.read, input.search);
        } else {
            await readMovies(input.read, input.search);
        }
    } else if(input.update){
        console.log("Entering Update");
        //code to update here
        if (input.show){
            await updateShow(input.query, input.update, input.new);
        } else {
            await updateMovie(input.query, input.update, input.new);
        }
    } else if(input.delete){
        console.log("Entering Delete");
        //code to delete here
        if (input.show){
            await deleteShow(input.delete);
        } else {
            await deleteMovie(input.delete);
        }
    } else {
        console.log("Command Not Found");
    }
    await mongoose.disconnect();
}
app(yargs.argv);