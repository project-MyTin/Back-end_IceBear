import { LoadCalendarDayDetail } from "../../domain/usecases";
import { ServerError } from "../errors";
import { ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class CalendarDayDetailController implements Controller {
    constructor(
        private readonly loadCalendarDayDetail: LoadCalendarDayDetail
    ) {}
    async handle(request: CalendarDayDetailController.Request): Promise<HttpResponse> {
        try {
            const result = await this.loadCalendarDayDetail.load(request);
            return ok(result);
        } catch (err) {
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace CalendarDayDetailController {
    export type Request = {
        y: number,
        m: number,
        d: number,
    };
}
