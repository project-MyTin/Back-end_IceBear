import { DbLoadRoutineResult } from "../../../data/usecases";
import { LoadRoutineResult } from "../../../domain/usecases";
import { RoutineRepository } from "../../../infra/db/repositories";

export const makeDbLoadRoutineResult = (): LoadRoutineResult => {
    const routineRepository = new RoutineRepository();
    return new DbLoadRoutineResult(routineRepository);
}
