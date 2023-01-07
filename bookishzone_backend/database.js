const mongoose = require('mongoose');

function DbConnect() {
    const URL = 'mongodb+srv://navdeepsingh:navdeep@cluster0.lxphbgu.mongodb.net/bookish?retryWrites=true&w=majority';
    // Database connection
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB connected...');
    });
}

module.exports = DbConnect;