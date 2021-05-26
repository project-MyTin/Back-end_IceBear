import { LoadRoutine } from "../../../domain/usecases";

export class LoadRoutineRepository {
    loadRoutine: (data: LoadRoutineRepository.Params) => Promise<LoadRoutineRepository.Result>;
}

export namespace LoadRoutineRepository {
    export type Params = LoadRoutine.Params;
    export type Result = LoadRoutine.Result;
}
