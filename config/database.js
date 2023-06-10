const mongoose = require('mongoose');

// TODO change DB according to assigment
const CNNECTION_STRING = 'mongodb://localhost:27017/scaffoldDB'

module.exports = async (app) => {
    try {
        await mongoose.connect(CNNECTION_STRING, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });

        console.log('Database connected')

    } catch (error) {
        console.error(err.message);
        process.exit(1);
    }
}