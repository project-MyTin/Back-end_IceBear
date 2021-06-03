import { LoadMotion } from "../../domain/usecases";
import { NotExistError, ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class MotionGetController implements Controller {
    constructor(
        private readonly loadMotion: LoadMotion
    ) {}
    async handle(request: MotionGetController.Request): Promise<HttpResponse> {
        try {
            const detail = await this.loadMotion.load(request);
            if(detail === null as any) {
                return notFound(new NotExistError());
            }
            return ok({ detail });
        } catch (err) {
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace MotionGetController {
    export type Request = {
        id: string,
    }
}