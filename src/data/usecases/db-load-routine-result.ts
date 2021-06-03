import { LoadRoutineResult } from "../../domain/usecases";
import { LoadRoutineResultRepository } from "../protocols/repository";

export class DbLoadRoutineResult implements LoadRoutineResult {
    constructor(
        private readonly loadRoutineResultRepository: LoadRoutineResultRepository
    ) {}
    async load(data: LoadRoutineResult.Params): Promise<LoadRoutineResult.Result> {
        return await this.loadRoutineResultRepository.loadRoutineResult({ q: data.q });
    }
}
