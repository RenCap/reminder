const NotFoundError = require('../routes/errors/NotFoundError');

const reminderDao = require('../daos/reminderDao');

exports.create = async value => await reminderDao.save(value);
exports.find = async () => await reminderDao.find();
exports.findOne = async id => {
    const reminder = await reminderDao.findOne(id);
    if (!reminder) {
        throw new NotFoundError(`Reminder with id ${id} not found`)
    }
    return reminder;
};
exports.update = async (id, value) => {
    await reminderDao.update(id, value);
    return reminderDao.findOne(id);
}
exports.delete = async id => {
    const reminder = await this.findOne(id);
    if (!reminder) {
        throw new NotFoundError(`Reminder with id ${id} not found`)
    }
    await reminderDao.delete(id);
    return reminder;
};