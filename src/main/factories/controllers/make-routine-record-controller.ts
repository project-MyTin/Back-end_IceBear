import { RoutineRecordController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";
import { makeDbAddHistory } from "../usecases";

export const makeRoutineRecordController = (): Controller => {
    const controller = new RoutineRecordController(makeDbAddHistory());
    return makeLogControllerDecorator(controller);
};
