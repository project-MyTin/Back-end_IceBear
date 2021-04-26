import { MotionSearchController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decorators";
import { makeDbLoadMotionResult } from "../usecases";

export const makeMotionSearchController = (): Controller => {
    const controller = new MotionSearchController(makeDbLoadMotionResult());
    return new LogControllerDecorator(controller);
}