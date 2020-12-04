const reminderRouter = require('./reminders');

const express = require('express');
const router = express.Router();

router.use('/reminders', reminderRouter);

module.exports = router;
