const mongoose = require("mongoose")

// book schema
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    pages: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
}) 

const Book = mongoose.model("Book" , bookSchema)

module.exports = Book