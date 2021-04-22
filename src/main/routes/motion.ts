import { Router } from "express";
import { adaptRoute } from "../adapters";
import { upload } from "../config/multer";
import { makeMotionPostController } from "../factories/controllers";

export default (router: Router): void => {
    router.post('/motion', upload.single('img'), adaptRoute(makeMotionPostController()));
};
