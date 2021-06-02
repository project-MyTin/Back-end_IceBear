export interface UpdateRoutine {
    update: (data: UpdateRoutine.Params) => Promise<boolean>;
}

export namespace UpdateRoutine {
    export type MotionInRoutine = {
        motion_id: number,
        motion_time: number,
        numOfMotion: number,
    };
    export type Params = {
        id: string,
        file?: string,
        name?: string,
        materials?: string,
        description?: string,
        type?: string,
        difficulty?: string,
        break_time?: number,// breakTime -> break_time
        motions?: MotionInRoutine[]
        time?: number,
        // authority?: string,
        // publisher?: string,
        // 
    }
}
