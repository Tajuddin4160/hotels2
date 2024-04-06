const mongoose = require("mongoose");
//const bcrypt = require('bcrypt');

const menuItemSchema = new mongoose.Schema({
    name: {

        type: String,
        required: true
    },
    price: {
        type: Number,
        requred: true

    },
    taste: {
        type: String,
        enum: ['sweet', 'spice', 'sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {

        type: Number,
        default: 0
    },
    username: {
        type: String,
        // required: true
    },
    password: {
        // required: true,
        type: String
    }


})

// personSchema.pre('save', async function (next) {
//     const person = this;
//     if (!person.isModified('password')) return next();

//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(person.password, salt);
//         person.password = hashedPassword;

//         next();
//     } catch (err) {
//         return next(err);
//     }


// })
// personSchema.methods.comparePassword = async function (candidatePassword) {
//     try {

//         const isMatch = await bcrypt.compare(candidatePassword, this.password);
//         return isMatch;
//     } catch (err) {
//         throw err;

//     }

// }
const menuItems = mongoose.model('menu', menuItemSchema);
module.exports = menuItems;