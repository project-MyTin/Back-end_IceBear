import { ServerError } from "../errors";
import { serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class RoutineDeleteController implements Controller {
    constructor() {}
    async handle(request: RoutineDeleteController.Request): Promise<HttpResponse> {
        try {
            
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
