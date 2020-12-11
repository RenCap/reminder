const NotFoundError = require('../routes/errors/NotFoundError');

const taskDao = require('../daos/taskDao');
const reminderService = require('./reminderService');

exports.find = async () => await taskDao.find();
exports.findById = async id => {
    const task = await taskDao.findById(id);
    if (!task) {
        throw new NotFoundError(`Task with id ${id} not found`);
    }
    return task;
};
exports.findByReminder = async reminderId => {
    let reminder = await reminderService.findById(reminderId);
    return await taskDao.find({reminder: reminder});
};
exports.create = async (reminderId, task) => {
    task.reminder = await reminderService.findById(reminderId);
    return await taskDao.create(task);
};
exports.update = async (reminderId, taskId, task) => {
    task.reminder = await reminderService.findById(reminderId);
    await taskDao.update(taskId, task);
    return taskDao.findById(taskId);
};
exports.deleteById = async id => {
    const task = await this.findById(id);
    await taskDao.deleteById(id);
    return task;
};
exports.deleteByReminder = async reminderId => {
    const reminder = await reminderService.findById(reminderId);
    await taskDao.delete({reminder: reminder});
};