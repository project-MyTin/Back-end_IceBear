import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decorators";

export const makeLogControllerDecorator = (controller: Controller): Controller => {
    return new LogControllerDecorator(controller);
}
