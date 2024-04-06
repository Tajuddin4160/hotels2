const express = require('express');
const menuItems = require('../model/menu');

const router = express.Router();
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new menuItems(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }

})



router.get('/', async (req, res) => {

    try {
        const data = await menuItems.find();
        console.log('data fetched');
        res.status(200).json(data);

    } catch (err) {

        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})

module.exports = router;