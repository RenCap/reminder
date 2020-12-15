import {Schema, model} from "mongoose";

import Reminder from "./reminderEntity";

const Task = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    reminder: {
        type: Schema.Types.ObjectId,
        ref: Reminder,
        required: true
    }
});

export default model('Task', Task);