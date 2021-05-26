import { LoadRoutine } from "../../domain/usecases";
import { LoadRoutineRepository } from "../protocols/repository";

export class DbLoadRoutine implements LoadRoutine {
    constructor(
        private readonly loadRoutineRepository: LoadRoutineRepository
    ) {}
    async load(data: LoadRoutine.Params): Promise<LoadRoutine.Result> {
        return await this.loadRoutineRepository.loadRoutine(data);
    }
}
