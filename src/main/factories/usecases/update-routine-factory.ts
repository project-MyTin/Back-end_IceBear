import { DbUpdateRoutine } from "../../../data/usecases";
import { UpdateRoutine } from "../../../domain/usecases";
import { MotionRepository, RoutineRepository } from "../../../infra/db/repositories";

export const makeDbUpdateRoutine = ():UpdateRoutine => {
    const motionRepository = new MotionRepository();
    const routineRepository = new RoutineRepository();
    return new DbUpdateRoutine(motionRepository, routineRepository);
}
