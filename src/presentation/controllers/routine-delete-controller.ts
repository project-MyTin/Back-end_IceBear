import { S3Delete } from "../../data/S3";
import { DeleteRoutine } from "../../domain/usecases";
import { ImageNotExistError, NotExistError, ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class RoutineDeleteController implements Controller {
    constructor(
        private readonly deleteRoutine: DeleteRoutine,
        private readonly s3Delete: S3Delete
    ) {}
    async handle(request: RoutineDeleteController.Request): Promise<HttpResponse> {
        try {
            const key = await this.deleteRoutine.delete({ id: Number(request.id) });
            if(!key) {
                return notFound(new NotExistError());
            }
            const result = await this.s3Delete.delete(key);
            if(!result) {
                return notFound(new ImageNotExistError());
            }
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
