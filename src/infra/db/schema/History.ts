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
        type: [String]
    },
    routine_total_time: {
        type: Number,
    },
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