import { UpdateMotion } from "../../domain/usecases";
import { NotExistError, ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse, MiddlewareRequest } from "../protocols";

export class MotionPutController implements Controller {
    constructor(
        private readonly updateMotion: UpdateMotion
    ) {}
    async handle(request: MotionPutController.Request): Promise<HttpResponse> {
        try {
            const file = request.mid.imageKey;
            const result = await this.updateMotion.update({
                ...(request),
                time: Number(request.time),
                file
            });
            if(!result) {
                return notFound(new NotExistError());
            }
            return ok({});
        } catch (err) {
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace MotionPutController {
    export type Request = {
        mid?: MiddlewareRequest,
        id: string,
        file?: string,
        name?: string, // *
        time?: string, // *
        description?: string,
        type?: string,
        parts?: string[],// 명세에 없음 // *
        difficulty?: string,
        url?: string // 명세에는 있지만, 디자인에는 없음
    }
}
