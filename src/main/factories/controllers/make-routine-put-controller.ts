import { RoutinePutController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";
import { makeDbUpdateRoutine } from "../usecases";

export const makeRoutinePutController = (): Controller => {
    const controller = new RoutinePutController(makeDbUpdateRoutine());
    return makeLogControllerDecorator(controller);
}
