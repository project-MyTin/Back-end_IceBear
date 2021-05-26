import { AddRoutineRepository, UpdateRoutineRepository } from "../../../data/protocols/repository";
import { MongoHelper } from "../mongo-helper";

const Routine = MongoHelper.loadSchema('Routine');

export class RoutineRepository implements AddRoutineRepository, UpdateRoutineRepository {
    async addRoutine(data: AddRoutineRepository.Params): Promise<void> {
        const input = new (await Routine)(data);
        await input.save();
    }
    async updateRoutine(data: UpdateRoutineRepository.Params): Promise<boolean> {
        if(!data.file) { delete data.file }
        const result = await (await Routine).findOneAndUpdate({ routine_id: data.id }, { ...data });
        return !!result;
    }
}
