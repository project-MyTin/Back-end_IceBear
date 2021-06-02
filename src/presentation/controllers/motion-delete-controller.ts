import { S3Delete } from "../../data/S3";
import { DeleteMotion } from "../../domain/usecases/delete-motion";
import { ImageNotExistError, NotExistError, ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class MotionDeleteController implements Controller {
    constructor(
        private readonly deleteMotion: DeleteMotion,
        private readonly s3Delete: S3Delete
    ) {}
    async handle(request: MotionDeleteController.Request): Promise<HttpResponse> {
        try {
            const key = await this.deleteMotion.delete({ id: Number(request.id) });
            if(!key) {
                return notFound(new NotExistError());
            }
            // const result = await this.s3Delete.delete(key);
            // if(!result) {
            //     return notFound(new ImageNotExistError());
            // }
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
