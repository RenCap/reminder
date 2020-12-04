const Reminder = require('../entities/reminderEntity');

exports.save = body => new Reminder(body).save();

exports.findAll = () => Reminder.find();