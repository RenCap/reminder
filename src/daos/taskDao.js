const Task = require('../entities/taskEntity');

exports.find = async query => Task.find(query);
exports.findById = async id => Task.findById(id);
exports.create = async task => Task.create(task);
exports.update = async (id, task) => Task.findByIdAndUpdate(id, task);
exports.delete = async query => Task.deleteMany(query);
exports.deleteById = async id => Task.findByIdAndDelete(id);