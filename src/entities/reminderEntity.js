const mongoose = require('mongoose');

const Reminder = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Reminder', Reminder);