const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    //True = scored, False = nonscored
    scored:{
        type: Boolean
    },
    //Question type: 0-text; 1-radio; 2-checkbox;
    questionType: {
        type: Number,
        required: true
    },
    answers: [String],
    correctAnswers: [{
        type: String,
    }],
    //Difficulty: 0-easy; 1-medium; 2-hard;
    difficulty: {
        type: Number,
    },
    category: {
        type: String,
        lowercase: true
    }
})

const Question = mongoose.model('question', QuestionSchema)

module.exports = Question