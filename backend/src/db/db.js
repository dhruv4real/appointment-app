const mongoose = require("mongoose");
require('dotenv').config();

const mongoDb = "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@appointmentsfirstdb.aoqt7pv.mongodb.net/";
const connectToDb = async () => {
    try {
        await mongoose.connect(mongoDb, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDb Successfully!");
    } catch (error) {
        console.error("Mongodb Connection error: ", error);
    }
}

module.exports = connectToDb;
