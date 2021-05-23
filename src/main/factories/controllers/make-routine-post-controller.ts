import { RoutinePostController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";

export const makeRoutinePostController = (): Controller => {
    const controller = new RoutinePostController();
    return makeLogControllerDecorator(controller);
}