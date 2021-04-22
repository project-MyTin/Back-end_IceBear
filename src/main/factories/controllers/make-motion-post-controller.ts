import { MotionPostController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";
import { makeDbAddMotion } from "../usecases";

export const makeMotionPostController = (): Controller => {
    const controller = new MotionPostController(makeDbAddMotion());
    return makeLogControllerDecorator(controller);
};
