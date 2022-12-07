require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const {createMovie, readMovies, updateMovie, deleteMovie} = require("./movies/function");

const app = async (input) => {
    if(input.create){
        console.log("Entering Create");
        // code to create entry
        await createMovie({title: input.title, actor: input.actor, director: input.director, rating: input.rating});
    } else if(input.read){
        console.log("Entering Read");
        // code to read here
        await readMovies();
    } else if(input.update){
        console.log("Entering Update");
        //code to update here
        await updateMovie(input.query, input.update, input.new);
    } else if(input.delete){
        console.log("Entering Delete");
        //code to delete here
        await deleteMovie(input.delete);
    } else {
        console.log("Command Not Found");
    }
    await mongoose.disconnect();
}
app(yargs.argv);