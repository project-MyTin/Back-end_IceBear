import { RoutineDeleteController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";
import { makeDbDeleteRoutine } from "../usecases";

export const makeRoutineDeleteController = (): Controller => {
    const controller = new RoutineDeleteController(makeDbDeleteRoutine());
    return makeLogControllerDecorator(controller);
}
