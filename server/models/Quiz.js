const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaderboardUserSchema = new Schema({
    name: {
        type: String,
        required: [true]
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    score: {
        type: Number,
        required: true
    }
});

const QuizSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    //0 - scored, 1 - nonscored
    quizType:{
        type: Number
    },
    numberOfQuestions:{
        type: Number
    },
    maximumTime: {
        type: Number
    },
    generatedQuizzes: [{
        QRid: {
            type: String
        },
        used: {
            type: Boolean,
            default: false
        }
    }],
    rules:[{
        numberofQuestionsInRule:{
            type: Number
        },
        typeOfQuestionsInRule: {
            type: Number
        },
        difficultyOfQuestionsInRule: {
            type: Number
        },
        categoryOfQuestionsInRule: {
            type: String,
            lowercase: true
        }
    }],
    leaderboard: [LeaderboardUserSchema],
    parentEvent:{
        type: String,
    }
})

const Quiz = mongoose.model('quiz', QuizSchema);

module.exports = Quiz