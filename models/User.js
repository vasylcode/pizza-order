const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: {type: String, unique: true, required: true},
    name: {type: String},
    password: {type: String, required: true}
});

module.exports = mongoose.model('user', User);
