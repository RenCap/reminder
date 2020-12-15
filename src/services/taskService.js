import NotFoundError from "../routes/errors/NotFoundError";

import * as taskDao from "../daos/taskDao";
import * as reminderService from "./reminderService";


export const find = async () => await taskDao.find();

export const findById = async id => {
    const task = await taskDao.findById(id);
    if (!task) {
        throw new NotFoundError(`Task with id ${id} not found`);
    }
    return task;
};

export const findByReminder = async reminderId => {
    let reminder = await reminderService.findById(reminderId);
    return await taskDao.find({reminder: reminder});
};

export const create = async (reminderId, task) => {
    task.reminder = await reminderService.findById(reminderId);
    return await taskDao.create(task);
};

export const update = async (reminderId, taskId, task) => {
    task.reminder = await reminderService.findById(reminderId);
    await taskDao.update(taskId, task);
    return taskDao.findById(taskId);
};

export const deleteById = async id => {
    const task = await findById(id);
    await taskDao.deleteById(id);
    return task;
};

export const deleteByReminder = async reminderId => {
    const reminder = await reminderService.findById(reminderId);
    await taskDao.deleteByQuery({reminder: reminder});
};