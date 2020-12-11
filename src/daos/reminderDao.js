const Reminder = require('../entities/reminderEntity');

exports.find = async query => Reminder.find(query);
exports.findById = async id => Reminder.findById(id);
exports.create = async reminder => Reminder.create(reminder);
exports.update = async (id, reminder) => Reminder.findByIdAndUpdate(id, reminder);
exports.deleteById = async id => Reminder.findByIdAndDelete(id);