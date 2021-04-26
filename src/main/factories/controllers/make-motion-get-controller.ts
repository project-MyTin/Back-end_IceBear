import { MotionGetController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decorators";
import { makeDbLoadMotion } from "../usecases";

export const makeMotionGetController = (): Controller => {
    const controller = new MotionGetController(makeDbLoadMotion());
    return new LogControllerDecorator(controller);
}