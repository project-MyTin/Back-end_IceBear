import { CalendarDayDetailController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";
import { makeDbLoadCalendarDayDetail } from "../usecases";

export const makeCalendarDayDetailController = (): Controller => {
    const controller = new CalendarDayDetailController(makeDbLoadCalendarDayDetail());
    return makeLogControllerDecorator(controller);
}
