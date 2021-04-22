import { Router } from "express";
import { adaptRoute } from "../adapters";
import { upload } from "../config/multer";
import { makeMotionPostController, makeMotionPutController } from "../factories/controllers";
import { uploadSingle } from "../middlewares";

export default (router: Router): void => {
    router.post('/motion', upload.single('img'), uploadSingle, adaptRoute(makeMotionPostController()));
    router.put('/motion/:id', upload.single('img'), uploadSingle, adaptRoute(makeMotionPutController()));
};
