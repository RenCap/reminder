const reminderDao = require('../daos/reminderDao');

exports.create = async value => await reminderDao.save(value);
exports.find = async () => await reminderDao.find();
exports.findOne = async id => reminderDao.findOne(id);
exports.update = async (id, value) => {
    await reminderDao.update(id, value);
    return reminderDao.findOne(id);
}
exports.delete = async id => {
    const entity = await this.findOne(id);
    await reminderDao.delete(id);
    return entity;
};