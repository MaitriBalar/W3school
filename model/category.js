const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Category = new Schema({
    name : String,
    colorcode : String
});

module.exports = mongoose.model('category', Category);