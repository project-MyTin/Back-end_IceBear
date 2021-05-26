import { AddRoutineRepository, DeleteRoutineRepository, LoadRoutineResultRepository, UpdateRoutineRepository } from "../../../data/protocols/repository";
import { MongoHelper } from "../mongo-helper";

const Routine = MongoHelper.loadSchema('Routine');

export class RoutineRepository implements AddRoutineRepository, UpdateRoutineRepository, DeleteRoutineRepository, LoadRoutineResultRepository {
    async addRoutine(data: AddRoutineRepository.Params): Promise<void> {
        const input = new (await Routine)(data);
        await input.save();
    }
    async updateRoutine(data: UpdateRoutineRepository.Params): Promise<boolean> {
        if(!data.file) { delete data.file }
        const result = await (await Routine).findOneAndUpdate({ routine_id: data.id }, { ...data });
        return !!result;
    }
    async deleteRoutine(data: DeleteRoutineRepository.Params): Promise<string> {
        const result = await (await Routine).findOneAndDelete({ routine_id: data.id });
        if(!result) { return null; }
        return result["file"];
    }
    async loadRoutineResult(data: LoadRoutineResultRepository.Params): Promise<LoadRoutineResultRepository.Result> {
        const list = await (await Routine).find({ name: { $regex: data.q } }).select(
            "-_id routine_id name difficulty description type file"
        );
        return list as any;
    }
}
