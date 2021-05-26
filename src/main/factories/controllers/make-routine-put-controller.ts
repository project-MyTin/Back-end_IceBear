import { RoutinePutController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";

export const makeRoutinePutController = (): Controller => {
    const controller = new RoutinePutController();
    return makeLogControllerDecorator(controller);
}
