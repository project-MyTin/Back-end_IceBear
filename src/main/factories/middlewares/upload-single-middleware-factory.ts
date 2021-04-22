import { UploadSingleMiddleware } from "../../../presentation/middlewares";
import { Middleware } from "../../../presentation/protocols";

export const makeUploadSingleMiddleware = (): Middleware => {
    return new UploadSingleMiddleware();
}