var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
    text: String
});

module.exports = mongoose.model("Note", noteSchema);