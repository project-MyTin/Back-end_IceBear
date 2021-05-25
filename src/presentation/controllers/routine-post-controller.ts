import { AddRoutine } from "../../domain/usecases";
import { ServerError } from "../errors";
import { ok, serverError } from "../helpers";
import { Controller, HttpResponse, MiddlewareRequest } from "../protocols";

export class RoutinePostController implements Controller {
    constructor(
        private readonly addRoutine: AddRoutine
    ) {}
    async handle(request: RoutinePostController.Request): Promise<HttpResponse> {
        try {
            // 입력값 검사

            // 루틴 저장
            await this.addRoutine.add({
                ...(request),
                fileName: "request.mid.imageKey"
            });
            return ok({});
            
        } catch (err) {
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace RoutinePostController {
    export type MotionInRoutine = {
        motionId: number,
        motionTime: number,
        numOfMotion: number,
    }

    export type Request = {
        mid: MiddlewareRequest,
        name: string,
        materials: string,
        description: string,
        type: string,
        difficulty: string,
        breakTime: number,
        motions: MotionInRoutine[]
    }
}
