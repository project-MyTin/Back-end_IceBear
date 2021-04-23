import { DbLoadMotion } from "../../../data/usecases";
import { LoadMotion } from "../../../domain/usecases";
import { MotionRepository } from "../../../infra/db/repositories";

export const makeDbLoadMotion = (): LoadMotion => {
    const motionRepository = new MotionRepository();
    return new DbLoadMotion(motionRepository);
}