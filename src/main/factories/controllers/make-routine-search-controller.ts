import { RoutineSearchController } from "../../../presentation/controllers";
import { Controller } from "../../../presentation/protocols";
import { makeLogControllerDecorator } from "../decorators";
import { makeDbLoadRoutineResult } from "../usecases";

export const makeRoutineSearchController = (): Controller => {
    const controller = new RoutineSearchController(makeDbLoadRoutineResult());
    return makeLogControllerDecorator(controller);
}
