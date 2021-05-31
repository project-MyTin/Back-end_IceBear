import { Router } from "express";
import { adaptRoute } from "../adapters";
import { makeCalendarDayController } from "../factories";

export default (router: Router): void => {
    router.get('/calendar/day',adaptRoute(makeCalendarDayController()));
}
