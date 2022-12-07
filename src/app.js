const yargs = require("yargs");
const mongoose = require("mongoose");

const app = async (input) => {
    if(input.create){
        console.log("Entering Create");
        // code to create entry
    } else if(input.read){
        console.log("Entering Read");
        // code to read here
    } else if(input.update){
        console.log("Entering Update");
        //code to update here
    } else if(input.delete){
        console.log("Entering Delete");
        //code to delete here
    } else {
        console.log("Command Not Found");
    }
    await mongoose.disconnect();
}
app(yargs.argv);