import { LoadRoutineResult } from "../../../domain/usecases";

export class LoadRoutineResultRepository {
    loadRoutineResult: (data: LoadRoutineResultRepository.Params) => Promise<LoadRoutineResultRepository.Result>;
}

export namespace LoadRoutineResultRepository {
    export type Params = LoadRoutineResult.Params;
    export type Result = LoadRoutineResult.Result;
}
