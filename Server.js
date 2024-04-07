
const express = require('express');
require('dotenv').config();
const app = express();

const db = require('./db');
const PORT = process.env.PORT || 3000;


const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get('/', (req, res) => {

    res.send("welcome to the hoetel ,How can i help");

})
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');



app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.listen(PORT, () => {
    console.log('server running on port:3000');

})