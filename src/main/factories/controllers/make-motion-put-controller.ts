import { MotionPutController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";
import { makeDbUpdateMotion } from "../usecases";

export const makeMotionPutController = (): Controller => {
    const controller = new MotionPutController(makeDbUpdateMotion());
    return makeLogControllerDecorator(controller);
}