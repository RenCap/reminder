import NotFoundError from "../routes/errors/NotFoundError";

import * as reminderDao from "../daos/reminderDao";
import * as taskService from "./taskService";

export const find = async () => await reminderDao.find();

export const findById = async id => {
    const reminder = await reminderDao.findById(id);
    if (!reminder) {
        throw new NotFoundError(`Reminder with id ${id} not found`);
    }
    return reminder;
};

export const create = async reminder => await reminderDao.create(reminder);

export const update = async (id, reminder) => {
    await reminderDao.update(id, reminder);
    return reminderDao.findById(id);
};

export const deleteById = async id => {
    const reminder = await findById(id);
    await taskService.deleteByReminder(id);
    await reminderDao.deleteById(id);
    return reminder;
};