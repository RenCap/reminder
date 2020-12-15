import express from "express";

import reminderRouter from "./reminders";
import taskRouter from "./tasks";

const router = express.Router();

router.use('/', taskRouter);
router.use('/reminders', reminderRouter);

export default router;
