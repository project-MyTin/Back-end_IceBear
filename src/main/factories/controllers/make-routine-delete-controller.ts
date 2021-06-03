import { RoutineDeleteController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";
import { makeS3Delete } from "../S3";
import { makeDbDeleteRoutine } from "../usecases";

export const makeRoutineDeleteController = (): Controller => {
    const controller = new RoutineDeleteController(makeDbDeleteRoutine(), makeS3Delete());
    return makeLogControllerDecorator(controller);
}
