import { LoadMotionResult } from "../../../domain/usecases"

export class LoadMotionResultRepository {
    loadMotionResult:(data: LoadMotionResultRepository.Params) => Promise<LoadMotionResultRepository.Result>;
}

export namespace LoadMotionResultRepository {
    export type Params = LoadMotionResult.Params;
    export type Result = LoadMotionResult.Result;
}