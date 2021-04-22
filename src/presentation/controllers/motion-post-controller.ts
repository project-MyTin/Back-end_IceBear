import { AddMotion } from "../../domain/usecases";
import { ServerError } from "../errors";
import { ok, serverError } from "../helpers";
import { Controller, HttpResponse, MiddlewareRequest } from "../protocols";

export class MotionPostController implements Controller {
    constructor(
        private readonly addMotion: AddMotion
    ) {}
    async handle(request:MotionPostController.Request): Promise<HttpResponse> {
        try {
            // request값 검사
            // db 추가
            const file = request.mid.imageKey;  // 여기부분
            await this.addMotion.add({
                ...(request),
                time: Number(request.time),
                file,
            });
            // ++ 파일 업로드할 때 미들웨어로 빼주기
            // 이미지 업로드 시 파일명 uuid 정해지기
            return ok({});
        }
        catch(err) {
            console.log('dddddddddddddd'); //test console loggin
            return serverError(new ServerError(err.stack));
        }
    }
}

export namespace MotionPostController {
    export type Request = {
        mid: MiddlewareRequest,
        name: string, // *
        time: string, // *
        description: string,
        type: string,
        parts: string[],// 명세에 없음 // *
        difficulty: string,
        url: string // 명세에는 있지만, 디자인에는 없음
        // * : 이 표시는 routine스키마에 임베딩될 motion 객체 속성을 말함.
    }
}
