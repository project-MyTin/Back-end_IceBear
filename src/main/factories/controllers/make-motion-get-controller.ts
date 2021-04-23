import { MotionGetController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decorators";

export const makeMotionGetController = (): Controller => {
    const controller = new MotionGetController();
    return new LogControllerDecorator(controller);
}