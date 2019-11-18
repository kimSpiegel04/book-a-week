var mongoose = require('mongoose'),
    Book = require('./models/books');

var data = [
    {
        title: "The Better Angels of our Nature",
        author: "Steven Pinker",
        pagesProgress: 0,
        totalPages: 200
    },
    {
        title: "The Quest",
        author: "Daniel Yergin",
        pagesProgress: 20,
        totalPages: 300
    },
    {
        title: "Deng Xiaoping and the Transformation of China",
        author: "Ezra Vogel",
        pagesProgress: 400,
        totalPages: 400
    }
]

function seedDB(){
    //remove all books
    Book.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        //add some books
        data.forEach(function(seed){
            Book.create(seed, function(err, book){
                if(err){
                    console.log(err);
                } else {
                    // console.log('added a book');
                }
            })
        })
    })
}

module.exports = seedDB;