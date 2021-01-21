import {Schema, model} from "mongoose";

const Reminder = new Schema({
    name: {
        type: String,
        required: true
    }
});

export default model('reminders', Reminder);