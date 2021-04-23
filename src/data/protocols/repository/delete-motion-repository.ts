import { DeleteMotion } from "../../../domain/usecases/delete-motion"

export class DeleteMotionRepository {
    deleteMotion:(data: DeleteMotionRepository.Params) => Promise<boolean>;
}

export namespace DeleteMotionRepository {
    export type Params = DeleteMotion.Params;
}
