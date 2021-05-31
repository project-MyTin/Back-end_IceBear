import { LoadCalendarDayDetail } from "../../domain/usecases";
import { LoadCalendarDayDetailRepository } from "../protocols/repository";

export class DbLoadCalendarDayDetail implements LoadCalendarDayDetail {
    constructor(
        private readonly loadCalendarDayDetailRepository: LoadCalendarDayDetailRepository
    ) {}
    async load(data: LoadCalendarDayDetail.Params): Promise<LoadCalendarDayDetail.Result> {
        // const { y,m,d } = data;
        return await this.loadCalendarDayDetailRepository.loadCalendarDayDetail(data);
        // history repository 에서 exp, routine_total_time, routine_num, motion_num 가져오기
        // history repository 에서 routine_list 가져오기
        // routine repository 에서 routine_list 의 routine_id 들을 통해서 routine_list 만들기
        // motion repository 에서 각각의 routine_list 요소 속의 motion_id 들을 가져와 motion_list 만들기
        
    }
}
// total_exp: number;
// total_routine_time: number;
// total_routine_num: number;
// total_motion_num: number;
// routine_list: LoadCalendarDayDetail.Routines[];
// motion_list: LoadCalendarDayDetail.Motions[];