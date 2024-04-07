const mongoose = require('mongoose');
require('dotenv').config();
//const MONGOURL = 'mongodb://127.0.0.1:27017/HOTELS';
const MONGOURL_SERVER = process.env.DB_URL;


mongoose.connect(MONGOURL_SERVER, {

    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected mongodb server');

});
db.on('error', (err) => {
    console.log('connection mongodb ERROR', err);

});
db.on('disconnected', () => {
    console.log(' mongodb Disoconnected');

})

module.exports = db;
