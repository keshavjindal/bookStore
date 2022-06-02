const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())

const Genre = require("./models/genre")
const Book = require("./models/book")

// connect to mongoose
// brew services run mongodb-community
// mongo
// brew services stop mongodb-community
mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
const db = mongoose.connection

app.get("/" , function(req , res){
    return res.send("hello world")
})

// What does this api endpoint do?
// It returns all the genres in json form.
app.get("/api/genres", function(req , res){
    Genre.find(function(err , genres){
        if(err){
            throw err;
        }

        res.json(genres)
    })
})

// What does this api endpoint do?
// It returns all the books in json form.
app.get("/api/books", function(req , res){
    Book.find(function(err , books){
        if(err){
            throw err;
        }

        res.json(books)
    })
})

// What does this api endpoint do?
// Whichever id is passed in the url, that book is returned
app.get("/api/books/:id/:io", function(req , res){

    console.log(req.params);
    console.log("jjj");

    Book.findById(req.params.id, function(err , book){
        if(err){
            throw err;
        }

        res.json(book)
    })
})

app.post("/api/genres", function(req , res){

    const newGenre = req.body

    Genre.create(newGenre, function(err , genre){
        if(err){
            throw err;
        }

        res.json(genre)
    })
})


app.listen(3000)