const mongoose = require("mongoose")

// genre schema
const genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
}) 

const Genre = mongoose.model("Genre" , genreSchema)

module.exports = Genre