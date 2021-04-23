import { DeleteMotion } from "../../domain/usecases/delete-motion";
import { DeleteMotionRepository } from "../protocols/repository";

export class DbDeleteMotion implements DeleteMotion {
    constructor(
        private readonly deleteMotionRepository: DeleteMotionRepository
    ) {}
    async delete(data: DeleteMotion.Params): Promise<boolean> {
        
    }
}