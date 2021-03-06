const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    food: Array,
    price: Number,
    email: String,
    name: String,
    address: String,
    pay: Boolean 
});

module.exports = mongoose.model('order', Order);
