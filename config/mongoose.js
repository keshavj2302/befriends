const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/befriends_Development');
const db = mongoose.connection;

db.on('error', function(err){
    console.log('Error while connecting database : ', err);
});

db.on('open', function(){
    console.log('Successfully connected to database');
});

module.exports = db;