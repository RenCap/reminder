const express = require('express');
const router = express.Router();

const requestHandler = require('./utils/requestHandler');
const reminderService = require('../services/reminderService');

router.get('/', (req, res, next) => {
    requestHandler(req, res, () => reminderService.find());
});

router.get('/:reminderId', (req, res, next) => {
    requestHandler(req, res, () => reminderService.findById(req.params.reminderId));
});

router.post('/', (req, res, next) => {
    requestHandler(req, res, () => reminderService.create(req.body), true);
});

router.put('/:reminderId', (req, res, next) => {
    requestHandler(req, res, () => reminderService.update(req.params.reminderId, req.body));
});

router.delete('/:reminderId', (req, res, next) => {
    requestHandler(req, res, () => reminderService.deleteById(req.params.reminderId));
});

module.exports = router;