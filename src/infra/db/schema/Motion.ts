import { Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const Motion = new Schema({
    motion_id: {
        type: Number,
        unique: true,
        required: true
    },
    file: {
        type: String,
        // default: 기본 이미지 URI 입력해주기
    },
    name: {
        type: String,
        require: true,
    },
    time: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    parts: {
        type: [String],
        require: true,
    },
    difficulty: {
        type: String,
        require: true,
    },
    url: {
        type: String,
    },
},
{
    timestamps: {
        createdAt: true,
        updatedAt: true,
    },
});

Motion.plugin(autoIncrement.plugin, {
    model: 'Motion',
    field: 'motion_id',
    startAt: 1,
    increment: 1
});

export default Motion;
