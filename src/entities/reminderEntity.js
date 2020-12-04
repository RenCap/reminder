const mongoose = require('mongoose');

const Reminder = new mongoose.Schema({
    title: String
});

module.exports = mongoose.model('Reminder', Reminder);