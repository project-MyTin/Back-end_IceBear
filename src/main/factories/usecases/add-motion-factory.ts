import { DbAddMotion } from "../../../data/usecases";
import { AddMotion } from "../../../domain/usecases";
import { MotionRepository } from "../../../infra/db/repositories";

export const makeDbAddMotion = (): AddMotion => {
    const motionRepository = new MotionRepository();
    return new DbAddMotion(motionRepository);
}
