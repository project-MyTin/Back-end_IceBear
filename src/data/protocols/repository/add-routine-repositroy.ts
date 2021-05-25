export class AddRoutineRepository {
    addRoutine:(data: AddRoutineRepository.Params) => Promise<void>;
}

export namespace AddRoutineRepository {
    export type MotionInRoutine = {
        motion_id: number,
        motion_name: string,
        motion_file: string,
        motion_time: number,
        numOfMotion: number,
        motion_parts: string[],
    };
    export type Params = {
        file: string,
        name: string,
        description: string,
        // publisher: string,//유저관련기능
        materials: string,
        motions: MotionInRoutine[],
        // time: number,// 루틴 총 시간 계산해서 값 넣기
        // authority: string,//유저관련기능
        difficulty: string,
        type: string,
        break_time: number,
    };
}