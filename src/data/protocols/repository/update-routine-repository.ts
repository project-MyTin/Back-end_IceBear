import { UpdateRoutine } from "../../../domain/usecases";

export class UpdateRoutineRepository {
    updateRoutine: (data: UpdateRoutineRepository.Params) => Promise<boolean>;
}

export namespace UpdateRoutineRepository {
    export type Params = UpdateRoutine.Params;
}
