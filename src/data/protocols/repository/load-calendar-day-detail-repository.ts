import { LoadCalendarDayDetail } from "../../../domain/usecases";

export class LoadCalendarDayDetailRepository {
    loadCalendarDayDetail: (data: LoadCalendarDayDetailRepository.Params) => Promise<LoadCalendarDayDetailRepository.Result>;
}

export namespace LoadCalendarDayDetailRepository {
    export type Params = LoadCalendarDayDetail.Params;
    export type Motion = {
        motion_id: number,
        motion_name: string,
        motion_file: string,
        motion_time: number,
    };
    export type Routine = {
        routine_id: number,
        routine_name: string,
        routine_file: string,
        routine_time: number,
    };
    export type Result = {
        routine_total_time: number,
        exp: number,
        routine_num: number,
        motion_num: number,
        motion_list: Motion[],
        routine_list: Routine[],
    };
}
