import { RoutinePostController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";
import { makeDbAddRoutine } from "../usecases";

export const makeRoutinePostController = (): Controller => {
    const controller = new RoutinePostController(makeDbAddRoutine());
    return makeLogControllerDecorator(controller);
}