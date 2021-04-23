import { MotionDeleteController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decorators";
import { makeDbDeleteMotion } from "../usecases";

export const makeMotionDeleteController = (): Controller => {
    const controller = new MotionDeleteController(makeDbDeleteMotion());
    return new LogControllerDecorator(controller);
}
