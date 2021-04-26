import { LoadMotion } from "../../domain/usecases";
import { LoadMotionRepository } from "../protocols/repository";

export class DbLoadMotion implements LoadMotion {
    constructor(
        private readonly loadMotionRepository: LoadMotionRepository
    ) {}
    async load(data: LoadMotion.Params): Promise<LoadMotionRepository.Result> {
        return await this.loadMotionRepository.loadMotion(data);
    }
}
