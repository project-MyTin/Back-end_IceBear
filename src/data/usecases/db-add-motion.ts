import { AddMotion } from "../../domain/usecases";
import { AddMotionRepository } from "../protocols/repository";

export class DbAddMotion implements AddMotion {
    constructor(
        private readonly addMotionRepository: AddMotionRepository
    ) {}
    async add(data: AddMotion.Params): Promise<void> {
        await this.addMotionRepository.addMotion(data);
    }
}