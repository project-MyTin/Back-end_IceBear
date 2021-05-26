import { DbDeleteRoutine } from "../../../data/usecases";
import { DeleteRoutine } from "../../../domain/usecases";

export const makeDbDeleteRoutine = (): DeleteRoutine => {
    return new DbDeleteRoutine();
}