import { DeleteRoutine } from "../../domain/usecases";
import { DeleteRoutineRepository } from "../protocols/repository";

export class DbDeleteRoutine implements DeleteRoutine {
    constructor(
        private readonly routineRepository: DeleteRoutineRepository
    ) {}
    async delete(data: DeleteRoutine.Params): Promise<string> {
        const result = await this.routineRepository.deleteRoutine({ id: data.id });
        return result;
    }
}