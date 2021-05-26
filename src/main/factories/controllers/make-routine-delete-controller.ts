import { RoutineDeleteController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";

export const makeRoutineDeleteController = (): Controller => {
    const controller = new RoutineDeleteController();
    return makeLogControllerDecorator(controller);
}
