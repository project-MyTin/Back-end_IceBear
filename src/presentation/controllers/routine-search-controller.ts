import { LoadRoutineResult } from "../../domain/usecases";
import { NotExistError, ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class RoutineSearchController implements Controller {
    constructor(
        private readonly loadRoutineResult: LoadRoutineResult
    ) {}
    async handle(request: RoutineSearchController.Request): Promise<HttpResponse> {
        try {
            const result = await this.loadRoutineResult.load({ q: request.q });
            if(result.length === 0) {
                return notFound(new NotExistError());
            }
            return ok({ result });
        } catch (err) {
            return serverError(new ServerError(err.stack)); 
        }
    }
}

export namespace RoutineSearchController {
    export type Request = {
        q: string,
        part: string,
        type: string
    }
}