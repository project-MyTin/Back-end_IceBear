import { DbLoadCalendarDay } from "../../../data/usecases";
import { LoadCalendarDay } from "../../../domain/usecases";
import { HistoryRepository } from "../../../infra/db/repositories";

export const makeDbLoadCalendarDay = (): LoadCalendarDay => {
    const historyRepository = new HistoryRepository();
    return new DbLoadCalendarDay(historyRepository);
}
