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
        id: {
            type: Number
        },
        used: Boolean
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
    leaderboard: [LeaderboardUserSchema]
})

const EventSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    description:{
        type: String,
        default: "A small description of an awesome event :D",
        trim: true
    },
    dueDate: {
        type: Date
    },

    quizzes:[QuizSchema]
});

const Event = mongoose.model('event', EventSchema);

module.exports = Event;