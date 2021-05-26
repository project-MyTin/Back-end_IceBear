import { Controller, HttpResponse } from "../protocols";

export class RoutineDeleteController implements Controller {
    constructor() {}
    async handle(request: RoutineDeleteController.Request): Promise<HttpResponse> {
        
    }
}

export namespace RoutineDeleteController {
    export type Request = {
        id: string,
    }
}
