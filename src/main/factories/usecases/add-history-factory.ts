import { DbAddHistory } from "../../../data/usecases";
import { AddHistory } from "../../../domain/usecases";
import { HistoryRepository } from "../../../infra/db/repositories";

export const makeDbAddHistory = (): AddHistory => {
    const historyRepository = new HistoryRepository();
    return new DbAddHistory(historyRepository);
}
