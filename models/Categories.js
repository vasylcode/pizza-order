const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: String,
    id: Number
});

module.exports = Categories = mongoose.model('categories', CategorySchema);
