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
    leaderboard: [LeaderboardUserSchema],
    dueDate: {
        type: Date
    },
    quizzesuId: [String]
});

const Event = mongoose.model('event', EventSchema);

module.exports = Event;