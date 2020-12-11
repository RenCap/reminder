const NotFoundError = require('../routes/errors/NotFoundError');

const reminderDao = require('../daos/reminderDao');
const taskService = require('./taskService');

exports.find = async () => await reminderDao.find();
exports.findById = async id => {
    const reminder = await reminderDao.findById(id);
    if (!reminder) {
        throw new NotFoundError(`Reminder with id ${id} not found`);
    }
    return reminder;
};
exports.create = async reminder => await reminderDao.create(reminder);
exports.update = async (id, reminder) => {
    await reminderDao.update(id, reminder);
    return reminderDao.findById(id);
};
exports.deleteById = async id => {
    const reminder = await this.findById(id);
    await taskService.deleteByReminder(id);
    await reminderDao.deleteById(id);
    return reminder;
};