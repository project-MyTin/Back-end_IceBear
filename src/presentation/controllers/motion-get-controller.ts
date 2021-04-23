import { ServerError } from "../errors";
import { serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class MotionGetController implements Controller {
    constructor() {}
    async handle(request: MotionGetController.Request): Promise<HttpResponse> {
        try {
            
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