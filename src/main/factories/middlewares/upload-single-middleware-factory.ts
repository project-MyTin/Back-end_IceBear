import { UploadSingleMiddleware } from "../../../presentation/middlewares";
import { Middleware } from "../../../presentation/protocols";

export const makeUploadSingleMiddleware = (field: string): Middleware => {
    return new UploadSingleMiddleware(field);
}