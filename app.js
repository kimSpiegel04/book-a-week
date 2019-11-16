// all of our good requirements
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Book = require('./models/books'),
    seedDB = require('./seeds');

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/book_a_week', { useUnifiedTopology: true, useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
seedDB();

// landing page
app.get('/', function(req,res){
    res.render('landing');
});


app.listen(port, function(){
    console.log('Read away on port ' + port + '!');
});