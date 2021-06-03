import { DbDeleteRoutine } from "../../../data/usecases";
import { DeleteRoutine } from "../../../domain/usecases";
import { RoutineRepository } from "../../../infra/db/repositories";

export const makeDbDeleteRoutine = (): DeleteRoutine => {
    const routineRepository = new RoutineRepository();
    return new DbDeleteRoutine(routineRepository);
}