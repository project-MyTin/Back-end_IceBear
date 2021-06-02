import { LoadCalendarDay } from "../../domain/usecases";
import { LoadCalendarDayRepository } from "../protocols/repository";

export class DbLoadCalendarDay implements LoadCalendarDay {
    constructor(
        private readonly loadCalendarDayRepository: LoadCalendarDayRepository
    ) {}
    async load(data: LoadCalendarDay.Params): Promise<LoadCalendarDay.Result> {
        return await this.loadCalendarDayRepository.loadCalendarDay(data);
    }
}