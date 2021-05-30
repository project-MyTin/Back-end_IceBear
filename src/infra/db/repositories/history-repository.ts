import { AddHistoryRepository } from '../../../data/protocols/repository';
import { MongoHelper } from '../mongo-helper';
import moment from 'moment';

const History = MongoHelper.loadSchema('History');

export class HistoryRepository implements AddHistoryRepository {
    async addHistory(data: AddHistoryRepository.Params): Promise<void> {
        const today = moment();
        const result = await (await History).findOne({ timestemp: today.format('YYYY-MM-DD') });
        if(result) {
            result["routine_list"].push(data.id);
            await (await History).findOneAndUpdate({ timestemp: today.format('YYYY-MM-DD') }, {
                routine_list: result["routine_list"],
                routine_total_time: result["routine_total_time"] + data.total_time
            });
            return;
        }
        
        const routine_list = [];
        routine_list.push(data.id);
        const input = new (await History)({
            timestemp: today.format('YYYY-MM-DD'),
            day: today.day(),
            routine_list,
            routine_total_time: data.total_time,
        });
        await input.save();
        return;
    }
}
