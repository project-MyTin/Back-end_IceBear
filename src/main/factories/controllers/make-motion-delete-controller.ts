import { MotionDeleteController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { LogControllerDecorator } from "../../decorators";
import { makeS3Delete } from "../S3";
import { makeDbDeleteMotion } from "../usecases";

export const makeMotionDeleteController = (): Controller => {
    const controller = new MotionDeleteController(makeDbDeleteMotion(), makeS3Delete());
    return new LogControllerDecorator(controller);
}
