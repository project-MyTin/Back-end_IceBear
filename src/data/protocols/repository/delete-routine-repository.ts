import { DeleteRoutine } from "../../../domain/usecases";

export class DeleteRoutineRepository {
    deleteRoutine: (data:DeleteRoutineRepository.Params) => Promise<string>;
}

export namespace DeleteRoutineRepository {
    export type Params = DeleteRoutine.Params;
}
