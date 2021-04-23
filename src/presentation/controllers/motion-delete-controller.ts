import { DeleteMotion } from "../../domain/usecases/delete-motion";
import { NotExistError, ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class MotionDeleteController implements Controller {
    constructor(
        private readonly deleteMotion: DeleteMotion
    ) {}
    async handle(request: MotionDeleteController.Request): Promise<HttpResponse> {
        try {
            const result = await this.deleteMotion.delete({ id: Number(request.id) });
            if(!result) {
                return notFound(new NotExistError());
            }
            return ok({});
        } catch (err) {
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace MotionDeleteController {
    export type Request = {
        id: string,
    }
}
