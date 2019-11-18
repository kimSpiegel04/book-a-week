var mongoose = require('mongoose'),
    Book = require('./models/books');

// var data = [
//     {
//         title: "The Better Angels of our Nature",
//         author: "Steven Pinker",
//         inProcess: false
//     },
//     {
//         title: "The Quest",
//         author: "Daniel Yergin",
//         inProcess: false
//     },
//     {
//         title: "Deng Xiaoping and the Transformation of China",
//         author: "Ezra Vogel",
//         inProcess: false
//     },
//     {
//         title: "The Cost of Hope",
//         author: "Amanda Bennett",
//         inProcess: false
//     },
//     {
//         title: "Behind the Beautiful Forevers",
//         author: "Katherine Boo",
//         inProcess: false
//     },
//     {
//         title: "Limits to Growth: The 30-Year Update",
//         author: "Donella Meadows",
//         inProcess: false
//     },
//     {
//         title: "Abundance: The Future is Better than you Think",
//         author: "Peter Diamandis and Steven Kotler",
//         inProcess: false
//     },
//     {
//         title: "Thinking, Fast and Slow",
//         author: "Daniel Kahneman",
//         inProcess: false
//     },
//     {
//         title: "The Man Who Stayed Behind",
//         author: "Amanda Bennett",
//         inProcess: false
//     },
//     {
//         title: "Moonwalking with Einstein",
//         author: "Joshua Foer",
//         inProcess: false
//     },
//     {
//         title: "One Billion Hungry: Can We Feed the World?",
//         author: "Gordon Conway",
//         inProcess: false
//     }
// ]

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