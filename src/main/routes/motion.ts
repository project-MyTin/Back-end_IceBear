import { Router } from "express";
import { adaptRoute } from "../adapters";
import { upload } from "../config/multer";
import { makeMotionDeleteController, makeMotionGetController, makeMotionPostController, makeMotionPutController, makeMotionSearchController } from "../factories/controllers";
import { uploadSingle } from "../middlewares";
import { uploadSingleUpdate } from "../middlewares/upload-single-update";

export default (router: Router): void => {
    router.post('/motion', upload.single('img'), uploadSingle, adaptRoute(makeMotionPostController()));
    router.put('/motion/:id', upload.single('img'), uploadSingleUpdate, adaptRoute(makeMotionPutController()));
    router.delete('/motion/:id', adaptRoute(makeMotionDeleteController()));
    router.get('/motion/detail/:id', adaptRoute(makeMotionGetController()));
    router.get('/motion', adaptRoute(makeMotionSearchController()));
};
