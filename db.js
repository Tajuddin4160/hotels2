const mongoose = require('mongoose');
const MONGOURL = 'mongodb://127.0.0.1:27017/HOTELS';

mongoose.connect(MONGOURL, {

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
