const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PizzaSchema = new Schema({
    name: String,
    image: String,
    types: [],
    sizes: [],
    price: Number,
    category: Number
});

module.exports = Pizza = mongoose.model('pizza', PizzaSchema);
