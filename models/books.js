var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    inProcess: Boolean,
    dateFinished: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('Book', bookSchema);