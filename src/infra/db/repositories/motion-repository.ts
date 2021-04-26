import { AddMotionRepository, DeleteMotionRepository, LoadMotionRepository, LoadMotionResultRepository, UpdateMotionRepository } from "../../../data/protocols/repository";
import { MongoHelper } from "../mongo-helper";

const Motion = MongoHelper.loadSchema('Motion');

export class MotionRepository implements AddMotionRepository, UpdateMotionRepository, DeleteMotionRepository, LoadMotionRepository, LoadMotionResultRepository {
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

    async deleteMotion(data: DeleteMotionRepository.Params): Promise<string> {
        const result = await (await Motion).findOneAndDelete({ motion_id: data.id });
        if(!result) { return null; }
        return result["file"];
    }

    async loadMotion(data: LoadMotionRepository.Params): Promise<LoadMotionRepository.Result> {
        const result = await (await Motion).findOne({ motion_id: data.id });
        if(!result) { return null; }
        return {
            file: result["file"],
            name: result["name"],
            type: result["type"],
            difficulty: result["difficulty"],
            time: result["time"],
            parts: result["parts"],
            description: result["description"],
            url: result["url"],
        };
    }

    async loadMotionResult(data: LoadMotionResultRepository.Params): Promise<LoadMotionResultRepository.Result> {
        // 검색 로직 구현
        const list = await (await Motion).find({ name: { $regex: data.q } }).select(
            "-_id motion_id name difficulty parts file"  
        );
        return list as any;
    }
}
