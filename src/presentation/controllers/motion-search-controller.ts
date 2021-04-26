import { LoadMotionResult } from "../../domain/usecases";
import { NotExistError, ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class MotionSearchController implements Controller {
    constructor(
        private readonly loadMotionResult: LoadMotionResult
    ) {}
    async handle(request: MotionSearchController.Request): Promise<HttpResponse> {
        try {
            const result = await this.loadMotionResult.load({ q: request.q });
            if(result.length === 0) {
                return notFound(new NotExistError());
            }
            return ok({ result });
        } catch (err) {
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace MotionSearchController {
    export type Request = {
        q: string,
        part: string,
        type: string
    }
}