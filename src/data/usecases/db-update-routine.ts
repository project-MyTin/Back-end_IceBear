import { UpdateRoutine } from "../../domain/usecases";
import { LoadMotionRepository, UpdateRoutineRepository } from "../protocols/repository";

export class DbUpdateRoutine implements UpdateRoutine {
    constructor(
        private readonly motionRepository: LoadMotionRepository,
        private readonly updateRoutineRepository: UpdateRoutineRepository
    ) {}
    async update(data: UpdateRoutine.Params): Promise<boolean> {
        let motionInRoutine = [];
        for(const motion of data.motions) {
            const { motion_id, motion_time, numOfMotion } = motion;
            let result = await this.motionRepository.loadMotion({ id: motion_id + "" });
            const { name: motion_name, file: motion_file, parts: motion_parts } = result;
            let motionDetail = {
                motion_id,
                motion_name,
                motion_file,
                motion_time,
                numOfMotion,
                motion_parts,
            };
            motionInRoutine.push(motionDetail);
        }

        const result = await this.updateRoutineRepository.updateRoutine({
            ...data,
            motions: motionInRoutine,
        });
        return !!result;
    }
}
