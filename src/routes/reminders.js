const express = require('express');
const router = express.Router();

const httpStatus = require('http-status-codes');

const reminderService = require('../services/reminderService');

router.get('/', async (req, res, next) => {
    const reminders = await reminderService.findAll();
    res.status(httpStatus.OK).json(reminders);
});

router.get('/:reminderId', (req, res, next) => {
    res.status(httpStatus.NOT_IMPLEMENTED).send({'error': 'Not implemented'});
});

router.post('/', async (req, res, next) => {
    const doc = await reminderService.create(req.body)
    // TODO find proper way to define eid instead of title slug
    res.status(httpStatus.CREATED)
        .header('Location', req.baseUrl + '/' + doc.title.replace(' ', '-'))
        .json(doc);
});

router.put('/:reminderId', (req, res, next) => {
    res.status(httpStatus.NOT_IMPLEMENTED).send({'error': 'Not implemented'});
});

router.delete('/reminderId', (req, res, next) => {
    res.status(httpStatus.NOT_IMPLEMENTED).send({'error': 'Not implemented'});
});

module.exports = router;