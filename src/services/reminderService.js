const reminderDao = require('../daos/reminderDao');

exports.create = value => reminderDao.save(value);
exports.findAll = () => reminderDao.findAll();
exports.findOne = id => reminderDao.findOne(id);
exports.update = async (id, value) => {
    await reminderDao.update(id, value);
    return reminderDao.findOne(id);
}
exports.delete = id => reminderDao.delete(id);