import { Controller, HttpResponse } from "../protocols";

export class MotionDeleteController implements Controller {
    constructor() {}
    async handle(request: MotionDeleteController.Request): Promise<HttpResponse> {
        
    }
}

export namespace MotionDeleteController {
    export type Request = {
        id: string,
    }
}
