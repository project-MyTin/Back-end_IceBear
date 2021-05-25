import { Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const Routine = new Schema({
    routine_id: {
        type: Number,
        unique: true,
        required: true,
    },
    file: {
        type: String,
    },
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    publisher: {
        type: String,
    },
    materials: {
        type: String,
    },
    motions: {
        type: [{
            motion_id: { type: Number },
            motion_name: { type: String },
            motion_file: { type: String },
            motion_time: { type: Number },
            numOfMotion: { type: Number },
            motion_parts: { type: [String] },
        }]
    },
    time: {
        type: Number,
    },
    authority: {
        type: String,
    },
    difficulty: {
        type: String,
    },
    type: {
        type: String,
    },
    break_time: {
        type: Number,
    },
},
{
    timestamps: {
        createdAt: true,
        updatedAt: true,
    }
});

Routine.plugin(autoIncrement.plugin, {
    model: 'Routine',
    field: 'routine_id',
    startAt: 1,
    increment: 1
});

export default Routine;
