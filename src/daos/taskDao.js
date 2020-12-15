import Task from "../entities/taskEntity";

export const find = async query => Task.find(query);

export const findById = async id => Task.findById(id);

export const create = async task => Task.create(task);

export const update = async (id, task) => Task.findByIdAndUpdate(id, task);

export const deleteByQuery = async query => Task.deleteMany(query);

export const deleteById = async id => Task.findByIdAndDelete(id);