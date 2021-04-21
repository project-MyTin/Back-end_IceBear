import { MotionPostController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";

export const makeMotionPostController = (): Controller => {
    return new MotionPostController();
};
