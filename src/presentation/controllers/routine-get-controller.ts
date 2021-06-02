import { LoadRoutine } from "../../domain/usecases";
import { NotExistError, ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class RoutineGetController implements Controller {
    constructor(
        private readonly loadRoutine: LoadRoutine
    ) {}
    async handle(request: RoutineGetController.Request): Promise<HttpResponse> {
        try {
            const detail = await this.loadRoutine.load(request);
            if(detail === null as any) {
                return notFound(new NotExistError());
            }
            return ok({ detail });
        } catch (err) {
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace RoutineGetController {
    export type Request = {
        id: string,
    }
}