export interface LoadRoutineResult {
    load:(data: LoadRoutineResult.Params) => Promise<LoadRoutineResult.Result>;
}

export namespace LoadRoutineResult {
    export type ResultModel = {
        id: string,
        name: string,
        difficulty: string,
        description: string,
        type: string,
        file: string,
    };
    export type Params = {
        q: string,
    };
    export type Result = ResultModel[];
}
