import { DbUpdateMotion } from "../../../data/usecases";
import { UpdateMotion } from "../../../domain/usecases";
import { MotionRepository } from "../../../infra/db/repositories";

export const makeDbUpdateMotion = (): UpdateMotion => {
    const motionRepository = new MotionRepository();
    return new DbUpdateMotion(motionRepository);
}
