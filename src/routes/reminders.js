const express = require('express');
const router = express.Router();

const httpStatus = require('http-status-codes');

const reminderService = require('../services/reminderService');

router.get('/', (req, res, next) => {
    (async () => {
        const reminders = await reminderService.findAll();
        res.status(httpStatus.OK).json(reminders);
    })();
});

router.get('/:reminderId', (req, res, next) => {
    (async () => {
        const reminder = await reminderService.findOne(req.params.reminderId);
        res.status(httpStatus.OK).json(reminder);
    })();
});

router.post('/', (req, res, next) => {
    (async () => {
        const doc = await reminderService.create(req.body)
        res.status(httpStatus.CREATED)
            .header('Location', req.baseUrl + '/' + doc._id)
            .json(doc);
    })();
});

router.put('/:reminderId', (req, res, next) => {
    (async () => {
        const reminder = await reminderService.update(req.params.reminderId, req.body);
        res.status(httpStatus.OK).json(reminder);
    })();
});

router.delete('/:reminderId', (req, res, next) => {
    (async () => {
        await reminderService.delete(req.params.reminderId);
        res.status(httpStatus.OK).send();
    })();
});

module.exports = router;