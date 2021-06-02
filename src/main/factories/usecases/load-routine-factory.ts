import { DbLoadRoutine } from "../../../data/usecases";
import { LoadRoutine } from "../../../domain/usecases";
import { RoutineRepository } from "../../../infra/db/repositories";

export const makeDbLoadRoutine = (): LoadRoutine => {
    const routineRepository = new RoutineRepository();
    return new DbLoadRoutine(routineRepository);
}
