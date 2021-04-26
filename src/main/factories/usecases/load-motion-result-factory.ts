import { DbLoadMotionResult } from "../../../data/usecases";
import { LoadMotionResult } from "../../../domain/usecases";
import { MotionRepository } from "../../../infra/db/repositories";

export const makeDbLoadMotionResult = (): LoadMotionResult => {
    const motionRepository = new MotionRepository();
    return new DbLoadMotionResult(motionRepository);
}