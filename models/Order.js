const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    food: Array,
    price: Number,
    email: String,
    name: String,
    address: String,
    pay: String 
});

module.exports = mongoose.model('order', Order);
