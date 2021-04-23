import { DeleteMotion } from "../../../domain/usecases/delete-motion"

export class DeleteMotionRepository {
    deleteMotion:(data: DeleteMotionRepository.Params) => Promise<string>;
}

export namespace DeleteMotionRepository {
    export type Params = DeleteMotion.Params;
}
