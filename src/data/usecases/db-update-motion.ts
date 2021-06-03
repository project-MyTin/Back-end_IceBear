import { UpdateMotion } from "../../domain/usecases";
import { UpdateMotionRepository } from "../protocols/repository";

export class DbUpdateMotion implements UpdateMotion {
    constructor(
        private readonly updateMotionRepository: UpdateMotionRepository
    ) {}

    async update(data: UpdateMotion.Params): Promise<boolean> {
        const result = await this.updateMotionRepository.updateMotion(data);
        return !!result;
    }
}