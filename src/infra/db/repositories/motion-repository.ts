import { AddMotionRepository, UpdateMotionRepository } from "../../../data/protocols/repository";
import { MongoHelper } from "../mongo-helper";

const Motion = MongoHelper.loadSchema('Motion');

export class MotionRepository implements AddMotionRepository, UpdateMotionRepository {
    async addMotion(data: AddMotionRepository.Params): Promise<void> {
        const input = new (await Motion)(data);
        // console.log(input); // test 로깅
        await input.save();
    }

    async updateMotion(data: UpdateMotionRepository.Params): Promise<boolean> {
        if(!data.file) { delete data.file }
        const result = await (await Motion).findOneAndUpdate({ motion_id: data.id }, { ...(data) });
        return !!result;
        // 성공을 했다면 result에는 옛날 데이터가 나온다.
        // 실패를 했다면 result에는 null 값이 넘겨진다.
    }
}
