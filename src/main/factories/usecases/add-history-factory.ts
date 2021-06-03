import { DbAddHistory } from "../../../data/usecases";
import { AddHistory } from "../../../domain/usecases";
import { HistoryRepository, RoutineRepository } from "../../../infra/db/repositories";

export const makeDbAddHistory = (): AddHistory => {
    const historyRepository = new HistoryRepository();
    const routineRepository = new RoutineRepository();
    return new DbAddHistory(historyRepository, routineRepository);
}
