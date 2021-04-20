import { Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const Motion = new Schema({
    // _id: Schema.Types.ObjectId,
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
    },
    parts: {
        type: [String]
    }
});

Motion.plugin(autoIncrement.plugin, {
    model: 'Motion',
    field: 'motion_id',
    startAt: 1,
    increment: 1
});

export default Motion;
