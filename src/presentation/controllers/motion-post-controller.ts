import { Controller, HttpResponse } from "../protocols";

export class MotionPostController implements Controller {
    constructor() {}
    async handle(request:MotionPostController.Request): Promise<HttpResponse> {
        
    }
}

export namespace MotionPostController {
    export type Request = {
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
