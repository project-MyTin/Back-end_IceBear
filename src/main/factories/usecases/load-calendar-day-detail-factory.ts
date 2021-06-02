import { DbLoadCalendarDayDetail } from "../../../data/usecases";
import { LoadCalendarDayDetail } from "../../../domain/usecases";
import { HistoryRepository } from "../../../infra/db/repositories";

export const makeDbLoadCalendarDayDetail = (): LoadCalendarDayDetail => {
    const historyRepository = new HistoryRepository();
    return new DbLoadCalendarDayDetail(historyRepository);
}
