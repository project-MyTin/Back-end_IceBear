import { HttpResponse, Middleware } from "../protocols";
import { ok } from "../helpers";
import env from '../../main/config/env';

export class UploadSingleMiddleware implements Middleware {
    constructor(private readonly field: string) {}
    async handle(request: UploadSingleMiddleware.Request): Promise<HttpResponse> {
        const key = {
            post: env.aws.defaultImage,
            put: null
        }
        return ok({ imageKey: 'key' in request ? request.key : key[this.field] }); // 기본 이미지 경로 전송
    }
}

export namespace UploadSingleMiddleware {
    export type Request = {
        key: string,
    }
}