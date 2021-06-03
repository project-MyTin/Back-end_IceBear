import { LoadCalendarDay } from "../../domain/usecases";
import { ServerError } from "../errors";
import { ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class CalendarDayController implements Controller {
    constructor(
        private readonly loadCalendarDay: LoadCalendarDay
    ) {}
    async handle(request: CalendarDayController.Request): Promise<HttpResponse> {
        try {
            const result = await this.loadCalendarDay.load(request);
            return ok({result});
        } catch (err) {
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace CalendarDayController {
    export type Request = {
        y: number,
        m: number,
    };
}