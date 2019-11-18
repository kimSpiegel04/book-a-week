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
// seedDB();

// landing page
app.get('/', function(req,res){
    res.render('landing');
});

// get all books from db
app.get('/books', function(req, res){
    Book.find({}, function(err, allBooks){
        if(err){
            console.log(err);
        } else {
            res.render('books/index', {books: allBooks});
        }
    });
});

// new book form
app.get('/books/new', function(req, res){
    res.render('books/new');
});

// add new book
app.post('/books', function(req,res){
    var title = req.body.title;
    var author = req.body.author;
    var newBook = {title: title, author: author};

    Book.create(newBook, function(err, newCreate){
        if(err){
            console.log(err);
        } else {
            res.redirect('/books');
        }
    });
});

// port served up on...
app.listen(port, function(){
    console.log('Read away on port ' + port + '!');
});