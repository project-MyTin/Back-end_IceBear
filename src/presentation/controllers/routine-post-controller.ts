import { AddRoutine } from "../../domain/usecases";
import { MotionNotExistError, ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse, MiddlewareRequest } from "../protocols";

export class RoutinePostController implements Controller {
    constructor(
        private readonly addRoutine: AddRoutine
    ) {}
    async handle(request: RoutinePostController.Request): Promise<HttpResponse> {
        try {
            // 입력값 검사

            // 루틴 저장
            const { motions, breakTime } = request;
            let motionsArr = [];
            // 문자열 -> 객체
            for(let motion of motions) {
                let testJson = JSON.parse(motion);
                motionsArr.push(testJson);
            }
            const { imageKey:fileName } = request.mid;
            const result = await this.addRoutine.add({
                ...(request),
                // fileName: "request.mid.imageKey",
                fileName,
                motions: motionsArr,
                breakTime: Number(breakTime)
            });
            if(!result) {
                return notFound(new MotionNotExistError());
            }
            return ok({});
            
        } catch (err) {
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace RoutinePostController {
    // export type MotionInRoutine = {
    //     motionId: number,
    //     motionTime: number,
    //     numOfMotion: number,
    // }

    export type Request = {
        mid: MiddlewareRequest,
        name: string,
        materials: string,
        description: string,
        type: string,
        difficulty: string,
        breakTime: string,
        // motions: MotionInRoutine[]
        motions: string[]
    }
}
