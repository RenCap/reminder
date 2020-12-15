import express from "express";

import requestHandler from "./utils/requestHandler";
import * as reminderService from "../services/reminderService";

const router = express.Router();

router.get('/', (req, res) => {
    requestHandler(req, res, () => reminderService.find());
});

router.get('/:reminderId', (req, res) => {
    requestHandler(req, res, () => reminderService.findById(req.params.reminderId));
});

router.post('/', (req, res) => {
    requestHandler(req, res, () => reminderService.create(req.body), true);
});

router.put('/:reminderId', (req, res) => {
    requestHandler(req, res, () => reminderService.update(req.params.reminderId, req.body));
});

router.delete('/:reminderId', (req, res) => {
    requestHandler(req, res, () => reminderService.deleteById(req.params.reminderId));
});

export default router;