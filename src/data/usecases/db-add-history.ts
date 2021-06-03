import { AddHistory } from "../../domain/usecases";
import { AddHistoryRepository, LoadRoutineRepository } from "../protocols/repository";

export class DbAddHistory implements AddHistory {
    constructor(
        private readonly addHistoryRepository: AddHistoryRepository,
        private readonly loadRoutineRepository: LoadRoutineRepository

    ) {}
    async add(data: AddHistory.Params): Promise<void> {

        let motion_list = [];
        const routineResult = await this.loadRoutineRepository.loadRoutine({ id: data.id });
        // if(!routineResult) {}   // 성공한 루틴이 db에 존재하지 않을 때

        const motions = routineResult["motions"];
        let count = 0;
        for(let motion of motions) {    // motion 추출
            motion_list.push({
                motion_id: motion["motion_id"],
                motion_name: motion["motion_name"],
                motion_file: motion["motion_file"],
                motion_time: motion["motion_time"],
            });
            count += motion["motion_time"];
        }

        const routine = {   // 루틴 추출
            routine_id: routineResult['id'],
            routine_name: routineResult['name'],
            routine_file: routineResult['file'],
            routine_time: count + routineResult['break_time'] * (motions.length),
        };

        await this.addHistoryRepository.addHistory({
            ...(data),
            motion_list,
            routine,
            motion_num: motion_list.length,
        });
    }
}
