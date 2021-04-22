import { AddMotionRepository } from "../../../data/protocols/repository";
import { MongoHelper } from "../mongo-helper";

const Motion = MongoHelper.loadSchema('Motion');

export class MotionRepository implements AddMotionRepository {
    async addMotion(data: AddMotionRepository.Params): Promise<void> {
        const input = new (await Motion)(data);
        console.log(input);
        await input.save();
    }
}
