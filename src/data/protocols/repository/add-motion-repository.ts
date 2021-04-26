import { AddMotion } from "../../../domain/usecases"

export class AddMotionRepository {
    addMotion: (data: AddMotionRepository.Params) => Promise<void>;
}

export namespace AddMotionRepository {
    export type Params = AddMotion.Params;
}
