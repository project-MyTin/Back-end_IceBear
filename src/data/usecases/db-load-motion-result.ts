import { LoadMotionResult } from "../../domain/usecases";
import { LoadMotionResultRepository } from "../protocols/repository";

export class DbLoadMotionResult implements LoadMotionResult {
    constructor(
        private readonly loadMotionResultRepository: LoadMotionResultRepository
    ) {}
    async load(data: LoadMotionResult.Params): Promise<LoadMotionResult.Result> {
        return await this.loadMotionResultRepository.loadMotionResult({q: data.q});
    }
}
