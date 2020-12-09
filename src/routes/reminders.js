const express = require('express');
const router = express.Router();

const httpStatus = require('http-status-codes');

const reminderService = require('../services/reminderService');

const requestHandler = async (req, res, process, isPost = false) => {
    const result = await process();
    if (isPost) {
        res.status(httpStatus.CREATED)
            .header('Location', req.baseUrl + '/' + result._id)
    } else {
        res.status(httpStatus.OK)
    }
    res.json(result);
}

router.get('/', (req, res, next) => {
    requestHandler(req, res, () => reminderService.find());
});

router.get('/:reminderId', (req, res, next) => {
    requestHandler(req, res, () => reminderService.findOne(req.params.reminderId));
});

router.post('/', (req, res, next) => {
    requestHandler(req, res, () => reminderService.create(req.body), true);
});

router.put('/:reminderId', (req, res, next) => {
    requestHandler(req, res, () => reminderService.update(req.params.reminderId, req.body));
});

router.delete('/:reminderId', (req, res, next) => {
    requestHandler(req, res, () => reminderService.delete(req.params.reminderId));
});

module.exports = router;