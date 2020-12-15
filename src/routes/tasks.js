import express from "express";

import requestHandler from "./utils/requestHandler";
import * as taskService from "../services/taskService";

const router = express.Router();

router.get('/tasks', (req, res) => {
    requestHandler(req, res, () => taskService.find());
});

router.get('/reminders/:reminderId/tasks', (req, res) => {
    requestHandler(req, res, () => taskService.findByReminder(req.params.reminderId));
});

router.get('/tasks/:taskId', (req, res) => {
    requestHandler(req, res, () => taskService.findById(req.params.taskId));
});

router.post('/reminders/:reminderId/tasks', (req, res) => {
    requestHandler(req, res, () => taskService.create(req.params.reminderId, req.body), true);
});

router.put('/reminders/:reminderId/tasks/:taskId', (req, res) => {
    requestHandler(req, res, () => taskService.update(req.params.reminderId, req.params.taskId, req.body));
});

router.delete('/tasks/:taskId', (req, res) => {
    requestHandler(req, res, () => taskService.deleteById(req.params.taskId));
});

export default router;