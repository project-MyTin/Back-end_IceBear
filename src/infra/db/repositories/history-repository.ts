import { AddHistoryRepository, LoadCalendarDayDetailRepository, LoadCalendarDayRepository } from '../../../data/protocols/repository';
import { MongoHelper } from '../mongo-helper';
import moment from 'moment';

const History = MongoHelper.loadSchema('History');

const lastDate = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

const initializeTo0 = (month: number): number[] => {
    return Array.from({ length: lastDate[month] }, () => 0);
}

export class HistoryRepository implements AddHistoryRepository, LoadCalendarDayRepository, LoadCalendarDayDetailRepository {
    async addHistory(data: AddHistoryRepository.Params): Promise<void> {
        const today = moment();
        const timestemp = Number(today.format('YYYYMMDD'));
        const result = await (await History).findOne({ timestemp });
        if(result) {
            result["routine_list"].push(data.routine);
            const new_motion_list = result["motion_list"].concat(data.motion_list);
            await (await History).findOneAndUpdate({ timestemp }, {
                routine_list: result["routine_list"],
                motion_list: new_motion_list,
                routine_total_time: result["routine_total_time"] + data.total_time,
                routine_num: result["routine_num"] + 1,
                motion_num: result["motion_num"] + data.motion_num,
                exp: result["exp"] + 19
            });
            return;
        }

        const routine_list = [];
        routine_list.push(data.routine); // 아님
        const input = new (await History)({
            timestemp,
            day: today.day(),
            routine_list,
            motion_list: data.motion_list,
            routine_total_time: data.total_time,
            routine_num: 1,
            motion_num: data.motion_num,
            exp: 19,
        });
        await input.save();
        return;
    }
    async loadCalendarDay(data: LoadCalendarDayRepository.Params): Promise<LoadCalendarDayRepository.Result> {
        let max = 0;
        let { y, m } = data;
        let calendar = initializeTo0(m);
        const year = y+'';
        const month = String(m).length < 2 ? "0"+m : m+"";
        const firstDay = Number(`${year}${month}01`);
        const lastDay = Number(`${year}${month}${lastDate[m]}`);

        // 해당 달의 값들 찾기 todo 원하는 컬럼만 가져오는 방법 고려해보기
        const result = await (await History).find().where('timestemp').gte(firstDay).lte(lastDay);
        
        // 달력에 routine_total_time 색칠 및 max 값 찾기
        for(let i of result) {
            let index = Number(String(i["timestemp"]).substr(6,2)) - 1;
            calendar[index] = i["routine_total_time"];
            max = i["routine_total_time"] > max ? i["routine_total_time"] : max;
        }
        return { total_list: calendar , max };
    }
    async loadCalendarDayDetail(data: LoadCalendarDayDetailRepository.Params): Promise<LoadCalendarDayDetailRepository.Result> {
        const { y,m,d } = data;
        const date = String(d).length < 2 ? "0"+d : d+"";
        const month = String(m).length < 2 ? "0"+m : m+"";
        const timestemp = `${y}${month}${date}`;
        const result = await (await History).findOne({ timestemp });
        if(!result) {
            return false as any;
        }
        return {
            routine_total_time: result["routine_total_time"],
            exp: result["exp"],
            routine_num: result["routine_num"],
            motion_num: result["motion_num"],
            motion_list: result["motion_list"],
            routine_list: result["routine_list"],
        };
    }
}
