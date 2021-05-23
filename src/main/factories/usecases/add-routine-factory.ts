import { DbAddRoutine } from "../../../data/usecases";
import { AddRoutine } from "../../../domain/usecases";
import { RoutineRepository } from "../../../infra/db/repositories";

export const makeDbAddRoutine = (): AddRoutine => {
    const routineRepository = new RoutineRepository();
    return new DbAddRoutine();
}