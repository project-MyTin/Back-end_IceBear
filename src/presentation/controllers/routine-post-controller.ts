import { ServerError } from "../errors";
import { ok, serverError } from "../helpers";
import { Controller, HttpResponse, MiddlewareRequest } from "../protocols";

export class RoutinePostController implements Controller {
    constructor() {}
    async handle(request: RoutinePostController.Request): Promise<HttpResponse> {
        try {
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
        breakTime: string,
        motions: MotionInRoutine[]
    }
}

//     (- 루틴 아이디)
// - 루틴 이름
// - 루틴 준비물
// - 루틴 설명
// - 루틴 유형
// - 루틴 난이도
// - 루틴 쉬는시간
// - 루틴 이미지
// - 루틴 동작리스트
// 	- 동작 아이디
// 	- 동작 시간
// 	- 동작 횟수
