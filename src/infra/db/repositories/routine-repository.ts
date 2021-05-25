import { AddRoutineRepository } from "../../../data/protocols/repository";
import { MongoHelper } from "../mongo-helper";

const Routine = MongoHelper.loadSchema('Routine');

export class RoutineRepository implements AddRoutineRepository {
    async addRoutine(data: AddRoutineRepository.Params): Promise<void> {
        const input = new (await Routine)(data);
        await input.save();
    }
}
