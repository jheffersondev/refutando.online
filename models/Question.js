const mongoose = require("mongoose")
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model("questions", QuestionSchema)

