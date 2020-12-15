import Reminder from "../entities/reminderEntity";

export const find = async (query) => Reminder.find(query);

export const findById = async id => Reminder.findById(id);

export const create = async reminder => Reminder.create(reminder);

export const update = async (id, reminder) => Reminder.findByIdAndUpdate(id, reminder);

export const deleteById = async id => Reminder.findByIdAndDelete(id);