var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    totalPages: {
        type: Number, 
        default: 0 //if user doesn't know page numbers
    },
    pagesProgress: {
        type: Number, //this will be current page
        default: 0
    },
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