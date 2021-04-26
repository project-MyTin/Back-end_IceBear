import { DbDeleteMotion } from "../../../data/usecases";
import { DeleteMotion } from "../../../domain/usecases/delete-motion";
import { MotionRepository } from "../../../infra/db/repositories";

export const makeDbDeleteMotion = (): DeleteMotion => {
    const motionRepository = new MotionRepository();
    return new DbDeleteMotion(motionRepository);
}