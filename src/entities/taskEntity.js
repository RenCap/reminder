const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Reminder = require('./reminderEntity');

const Task = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    reminder: {
        type: Schema.Types.ObjectId,
        ref: Reminder,
        required: true
    }
});

module.exports = mongoose.model('Task', Task);