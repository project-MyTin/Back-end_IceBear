import { CalendarDayController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";
import { makeDbLoadCalendarDay } from "../usecases";

export const makeCalendarDayController = (): Controller => {
    const controller = new CalendarDayController(makeDbLoadCalendarDay());
    return makeLogControllerDecorator(controller);
}
