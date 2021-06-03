export interface LoadMotionResult {
    load:(data: LoadMotionResult.Params) => Promise<LoadMotionResult.Result>;
}

export namespace LoadMotionResult {
    export type ResultModel = {
        id: string,
        name: string,
        difficulty: string,
        parts: string[],
        file: string
    }
    export type Params = {
        q: string,
    }
    export type Result = ResultModel[]
}
