import { AddRoutine } from "../../domain/usecases";
import { AddRoutineRepository, LoadMotionRepository } from "../protocols/repository";

export class DbAddRoutine implements AddRoutine {
    constructor(
        private readonly motionRepository: LoadMotionRepository,
        private readonly routineRepository: AddRoutineRepository
    ) {}
    async add(data: AddRoutine.Params): Promise<void> {
        let motionInRoutine = [];
        for(const motion of data.motions) {
            let result = await this.motionRepository.loadMotion({ id: motion.motionId + "" });
            const { motionId: motion_id, motionTime: motion_time, numOfMotion } = motion;
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
        // 가져온 정보를 추가하여 루틴 컬렉션에 루틴 등록
        await this.routineRepository.addRoutine({
            ...(data),
            file: data.fileName,
            motions: motionInRoutine,
            break_time: data.breakTime,
        });
        
        // motion 테이블에서 나머지 정보 가져오기
        // const motionList = data.motions.map(async (motion) => {
        //     return await this.motionRepository.loadMotion({ id: motion.motionId + "" });
        // });
        // map 함수는 async/await 를 지원하지않으므로 for문을 사용하여 실행한다.
    }
}
