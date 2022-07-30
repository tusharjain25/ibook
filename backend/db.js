const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://root:rooty@cluster0.mdpeosu.mongodb.net/ibook"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;
