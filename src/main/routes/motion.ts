import { Router } from "express";
import { adaptRoute } from "../adapters";
import { upload } from "../config/multer";
import { makeMotionDeleteController, makeMotionPostController, makeMotionPutController } from "../factories/controllers";
import { uploadSingle } from "../middlewares";
import { uploadSingleUpdate } from "../middlewares/upload-single-update";

export default (router: Router): void => {
    router.post('/motion', upload.single('img'), uploadSingle, adaptRoute(makeMotionPostController()));
    router.put('/motion/:id', upload.single('img'), uploadSingleUpdate, adaptRoute(makeMotionPutController()));
    router.delete('/motion/:id', adaptRoute(makeMotionDeleteController()));
};
