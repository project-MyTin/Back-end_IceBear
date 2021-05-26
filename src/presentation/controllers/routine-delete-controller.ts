import { DeleteRoutine } from "../../domain/usecases";
import { ServerError } from "../errors";
import { ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class RoutineDeleteController implements Controller {
    constructor(
        private readonly deleteRoutine: DeleteRoutine
    ) {}
    async handle(request: RoutineDeleteController.Request): Promise<HttpResponse> {
        try {

            return ok({});
        } catch (err) {
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace RoutineDeleteController {
    export type Request = {
        id: string,
    }
}
