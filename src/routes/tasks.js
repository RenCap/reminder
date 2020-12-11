const express = require('express');
const router = express.Router();

const requestHandler = require('./utils/requestHandler');
const taskService = require('../services/taskService');

router.get('/tasks', (req, res, next) => {
    requestHandler(req, res, () => taskService.find());
});

router.get('/reminders/:reminderId/tasks', (req, res, next) => {
    requestHandler(req, res, () => taskService.findByReminder(req.params.reminderId));
});

router.get('/tasks/:taskId', (req, res, next) => {
    requestHandler(req, res, () => taskService.findById(req.params.taskId));
});

router.post('/reminders/:reminderId/tasks', (req, res, next) => {
    requestHandler(req, res, () => taskService.create(req.params.reminderId, req.body), true);
});

router.put('/reminders/:reminderId/tasks/:taskId', (req, res, next) => {
    requestHandler(req, res, () => taskService.update(req.params.reminderId, req.params.taskId, req.body));
});

router.delete('/tasks/:taskId', (req, res, next) => {
    requestHandler(req, res, () => taskService.deleteById(req.params.taskId));
});

module.exports = router;