import { DbAddRoutine } from "../../../data/usecases";
import { AddRoutine } from "../../../domain/usecases";
import { MotionRepository, RoutineRepository } from "../../../infra/db/repositories";

export const makeDbAddRoutine = (): AddRoutine => {
    const motionRepository = new MotionRepository();
    const routineRepository = new RoutineRepository();
    return new DbAddRoutine(motionRepository, routineRepository);
}