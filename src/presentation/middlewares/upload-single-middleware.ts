import { HttpResponse, Middleware } from "../protocols";
import { ok } from "../helpers";
import env from '../../main/config/env';

export class UploadSingleMiddleware implements Middleware {
    constructor() {}
    async handle(request: UploadSingleMiddleware.Request): Promise<HttpResponse> {
        return ok({ imageKey: 'key' in request ? request.key : env.aws.defaultImage }); // 기본 이미지 경로 전송
    }
}

export namespace UploadSingleMiddleware {
    export type Request = {
        key: string,
    }
}