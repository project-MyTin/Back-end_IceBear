import { AddHistory } from "../../../domain/usecases";

export class AddHistoryRepository {
    addHistory: (data: AddHistoryRepository.Params) => Promise<void>;
}

export namespace AddHistoryRepository {
    export type Params = AddHistory.Params;
}
