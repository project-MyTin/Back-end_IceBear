import { adaptMiddleware } from "../adapters";
import { makeUploadSingleMiddleware } from "../factories/middlewares";

export const uploadSingle = adaptMiddleware(makeUploadSingleMiddleware("post"));