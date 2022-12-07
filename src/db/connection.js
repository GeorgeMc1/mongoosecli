require("dotenv").config();
const mongoose = require("mongoose");
connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected");
    } catch (error) {
        console.log(error);
    }
}
connect();