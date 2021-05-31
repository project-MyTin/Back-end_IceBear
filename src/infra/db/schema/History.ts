import { Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const History = new Schema({
    history_id: {
        type: Number,
        unique: true,
        required: true
    },
    timestemp: {
        type: Number,
        require: true,
    },
    day: {
        type: Number,
    },
    routine_list: {
        type: [{
            routine_id: { type: Number },
            routine_name: { type: String },
            routine_file: { type: String },
            routine_time: { type: Number },
        }]
    },
    motion_list: {
        type: [{
            motion_id: { type: Number },
            motion_name: { type: String },
            motion_file: { type: String },
            motion_time: { type: Number },
        }]
    },
    routine_total_time: {
        type: Number,
    },
    routine_num: {  // 필요한가 ?
        type: Number,
    },
    motion_num: {
        type: Number,
    },
    exp: {
        type: Number,
    }
},{
    timestamps: {
        createdAt: true,
        updatedAt: true,
    }
});

History.plugin(autoIncrement.plugin, {
    model: 'History',
    field: 'history_id',
    startAt: 1,
    increment: 1,
});

export default History;