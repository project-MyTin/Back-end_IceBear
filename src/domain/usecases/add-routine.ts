export interface AddRoutine {
    add:(data: AddRoutine.Params) => Promise<void>;
}

export namespace AddRoutine {
    export type MotionInRoutine = {
        motionId: number,
        motionTime: number,
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