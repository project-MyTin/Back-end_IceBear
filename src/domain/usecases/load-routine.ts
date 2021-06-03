export interface LoadRoutine {
    load: (data: LoadRoutine.Params) => Promise<LoadRoutine.Result>;
}

export namespace LoadRoutine {
    export type Params = {
        id: string,
    }
    export type MotionsInRoutine = {
        motion_parts: string[],
        motion_id: number,
        motion_file: string,
        motion_time: number,
        numOfMotion: number,

    }
    export type Result = {
        id: number,
        file: string,
        name: string,
        materials: string,
        description: string,
        type: string,
        difficulty: string,
        break_time: number,
        motions: MotionsInRoutine[]
    }
}
