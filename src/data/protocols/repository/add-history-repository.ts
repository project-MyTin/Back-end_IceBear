import { AddHistory } from "../../../domain/usecases";

export class AddHistoryRepository {
    addHistory: (data: AddHistoryRepository.Params) => Promise<void>;
}

export namespace AddHistoryRepository {
    export type Routine = {
        routine_id: number,
        routine_name: string,
        routine_file: string,
        routine_time: number,
    };
    export type Motion = {
        motion_id: number,
        motion_name: string,
        motion_file: string,
        motion_time: number,
    };
    export type Params = {
        total_time: number,
        motion_num: number,
        motion_list: Motion[],
        routine: Routine,        
    };
}
