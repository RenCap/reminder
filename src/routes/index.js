const express = require('express');
const router = express.Router();

const reminderRouter = require('./reminders');
const taskRouter = require('./tasks');

router.use('/', taskRouter);
router.use('/reminders', reminderRouter);

module.exports = router;
