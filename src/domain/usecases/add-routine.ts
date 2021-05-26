export interface AddRoutine {
    add:(data: AddRoutine.Params) => Promise<void>;
}

export namespace AddRoutine {
    export type MotionInRoutine = {
        motion_id: number,
        motion_time: number,
        numOfMotion: number,
    };
    export type Params = {
        fileName: string,
        name: string,
        description: string,
        materials: string,
        type: string,
        difficulty: string,
        breakTime: number,
        motions: MotionInRoutine[]
    };
}