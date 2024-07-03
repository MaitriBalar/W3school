const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Topic = new Schema({
    title : String,
    discription : String,
    image : String,
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    subcategory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "subcategory"
    }
});

module.exports = mongoose.model('topic', Topic);