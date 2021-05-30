import { AddHistory } from "../../domain/usecases";
import { AddHistoryRepository } from "../protocols/repository";

export class DbAddHistory implements AddHistory {
    constructor(
        private readonly addHistoryRepository: AddHistoryRepository
    ) {}
    async add(data: AddHistory.Params): Promise<void> {
        await this.addHistoryRepository.addHistory(data);
    }
}