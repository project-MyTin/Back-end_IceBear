import { Controller, HttpResponse, MiddlewareRequest } from "../protocols";

export class RoutinePutController implements Controller {
    constructor() {}
    async handle(request:): Promise<HttpResponse> {

    }
}

export namespace RoutinePutController {
    export type Request = {
        mid?: MiddlewareRequest,
        name?: string,
        materials?: string,
        description?: string,
        type?: string,
        difficulty?: string,
        breakTime?: string,
        // motions: MotionInRoutine[]
        motions?: string[]
    }
}