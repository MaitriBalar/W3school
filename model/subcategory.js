const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubCategory = new Schema({
    name : String,
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    }
});

module.exports = mongoose.model('subcategory', SubCategory);