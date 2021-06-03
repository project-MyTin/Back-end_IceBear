import { LoadMotion } from "../../../domain/usecases"

export class LoadMotionRepository {
    loadMotion:(data: LoadMotionRepository.Params) => Promise<LoadMotionRepository.Result>;
}

export namespace LoadMotionRepository {
    export type Params = LoadMotion.Params;
    export type Result = LoadMotion.Result;
}
