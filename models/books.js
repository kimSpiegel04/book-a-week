var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    totalPages: Number,
    inProcess: Number,
    dateFinished: {
        type: Date,
        default: null
    },
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Notes"
        }
    ]

});

module.exports = mongoose.model('Book', bookSchema);