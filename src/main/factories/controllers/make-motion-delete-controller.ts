import { MotionDeleteController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decorators";

export const makeMotionDeleteController = (): Controller => {
    const controller = new MotionDeleteController();
    return new LogControllerDecorator(controller);
}