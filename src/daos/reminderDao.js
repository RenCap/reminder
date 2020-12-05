const Reminder = require('../entities/reminderEntity');

exports.save = body => new Reminder(body).save();
exports.findAll = () => Reminder.find();
exports.findOne = id => Reminder.findById(id);
exports.update = (id, value) => Reminder.findByIdAndUpdate(id, value);
exports.delete = id => Reminder.findByIdAndDelete(id);