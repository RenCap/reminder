const reminderDao = require('../daos/reminderDao');

exports.create = body => reminderDao.save(body);

exports.findAll = () => reminderDao.findAll();