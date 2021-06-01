import { LoadCalendarDayDetail } from "../../domain/usecases";
import { LoadCalendarDayDetailRepository } from "../protocols/repository";

export class DbLoadCalendarDayDetail implements LoadCalendarDayDetail {
    constructor(
        private readonly loadCalendarDayDetailRepository: LoadCalendarDayDetailRepository
    ) {}
    async load(data: LoadCalendarDayDetail.Params): Promise<LoadCalendarDayDetail.Result> {
        return await this.loadCalendarDayDetailRepository.loadCalendarDayDetail(data);
    }
}
