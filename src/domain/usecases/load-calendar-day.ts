export interface LoadCalendarDay {
    load:(data: LoadCalendarDay.Params) => Promise<LoadCalendarDay.Result>;
}

export namespace LoadCalendarDay {
    export type Params = {
        y: number,
        m: number,
    };
    // export type day = {
    //     routine_total_time: number,
    // }
    export type Result = {
        total_list: number[],
        max: number,
    };
}
