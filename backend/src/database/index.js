const mongoose = require('mongoose');

const connectDB = () => {
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected succesfully",);
    } catch (err) {
        console.log('Error connecting mongodb',err)
    }
}

module.exports = {
    connectDB
}