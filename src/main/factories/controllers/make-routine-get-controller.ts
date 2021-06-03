import { RoutineGetController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";
import { makeDbLoadRoutine } from "../usecases/load-routine-factory";

export const makeRoutineGetController = (): Controller => {
    const controller = new RoutineGetController(makeDbLoadRoutine());
    return makeLogControllerDecorator(controller);
}
