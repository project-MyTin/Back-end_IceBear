import { UpdateRoutine } from "../../domain/usecases";
import { NotExistError, ServerError } from "../errors";
import { notFound, ok, serverError } from "../helpers";
import { Controller, HttpResponse, MiddlewareRequest } from "../protocols";

export class RoutinePutController implements Controller {
    constructor(
        private readonly updateRoutine: UpdateRoutine
    ) {}
    async handle(request:RoutinePutController.Request): Promise<HttpResponse> {
        try {
            // 입력값 검사
            // joi를 통해서 입력값 검사?
            // 통합 입력값 검사기 만들기?
            // 수정사항 업데이트
            const { motions, breakTime } = request;
            let motionsArr = [];
            let totalMotionTime = 0;
            // 문자열 -> 객체
            for(let motion of motions) {
                let testJson = JSON.parse(motion);
                motionsArr.push(testJson);
                totalMotionTime += (Number(testJson.motion_time) || 0);
            }
            
            const result = await this.updateRoutine.update({
                ...(request),
                file: "request.mid.imageKey",
                motions: motionsArr,// 없을 땐?
                time: totalMotionTime,
                break_time: Number(breakTime),
            });
            if(!result) {
                return notFound(new NotExistError());
            }
            return ok({});
        } catch (err) {
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace RoutinePutController {
    export type Request = {
        id: string,
        mid?: MiddlewareRequest,
        name?: string,
        materials?: string,
        description?: string,
        type?: string,
        difficulty?: string,
        breakTime?: string,
        // motions: MotionInRoutine[]
        motions?: string[]
    }
}