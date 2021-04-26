import { adaptMiddleware } from "../adapters";
import { makeUploadSingleMiddleware } from "../factories/middlewares";

export const uploadSingleUpdate = adaptMiddleware(makeUploadSingleMiddleware("put"));