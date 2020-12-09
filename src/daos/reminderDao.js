const Reminder = require('../entities/reminderEntity');

exports.save = async entity => Reminder.create(entity);
exports.find = async () => Reminder.find();
exports.findOne = async id => Reminder.findById(id);
exports.update = async (id, entity) => Reminder.findByIdAndUpdate(id, entity);
exports.delete = async id => Reminder.findByIdAndDelete(id);