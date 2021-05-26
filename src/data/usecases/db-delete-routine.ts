import { DeleteRoutine } from "../../domain/usecases";

export class DbDeleteRoutine implements DeleteRoutine {
    constructor() {}
    async delete(data: DeleteRoutine.Params): Promise<string> {
        // repository namespace (usecases) 정의하기
    }
}