const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    questionType: {
        type: Number,
        required: true
    },
    answers: [String],
    correctAnswers: [{
        type: String,
        required: true
    }],
    difficulty: {
        type: Number
    },
    title:{
        type: String
    },
    category: [String]
})

const Question = mongoose.model('question', QuestionSchema)

module.exports = Question