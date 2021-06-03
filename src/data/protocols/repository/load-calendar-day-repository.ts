import { LoadCalendarDay } from "../../../domain/usecases";

export class LoadCalendarDayRepository {
    loadCalendarDay: (data: LoadCalendarDayRepository.Params) => Promise<LoadCalendarDayRepository.Result>;
}

export namespace LoadCalendarDayRepository {
    export type Params = LoadCalendarDay.Params;
    export type Result = LoadCalendarDay.Result;
}
