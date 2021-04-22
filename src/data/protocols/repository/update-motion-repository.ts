import { UpdateMotion } from '../../../domain/usecases';

export class UpdateMotionRepository {
    updateMotion: (data: UpdateMotionRepository.Params) => Promise<boolean>;
}

export namespace UpdateMotionRepository {
    export type Params = UpdateMotion.Params;
}