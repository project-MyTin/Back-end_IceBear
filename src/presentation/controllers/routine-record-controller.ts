import { ServerError } from "../errors";
import { ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";
import { AddHistory } from "../../domain/usecases";

export class RoutineRecordController implements Controller {
    constructor(
        private readonly addHistory: AddHistory
    ) {}
    async handle(request: RoutineRecordController.Request): Promise<HttpResponse> {
        try {
            await this.addHistory.add(request);
            return ok({});
        } catch (err) {
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace RoutineRecordController {
    export type Request = {
        id: string,
        total_time: number,
    }
}