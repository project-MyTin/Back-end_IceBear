export interface AddRoutine {
    add:(data: AddRoutine.Params) => Promise<void>;
}

export namespace AddRoutine {
    export type MotionInRoutine = {
        motionId: number,
        motionTime: number,
        numOfMotion: number,
    }
    export type Params = {
        fileName: string,
        name: string,
        materials: string,
        description: string,
        type: string,
        difficulty: string,
        breakTime: string,
        motions: MotionInRoutine[]
    }
}