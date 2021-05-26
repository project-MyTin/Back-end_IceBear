import { Router } from "express";
import { adaptRoute } from "../adapters";
import { upload } from "../config/multer";
import { makeRoutinePostController } from "../factories";
import { uploadSingle } from "../middlewares";

export default (router: Router): void => {
    router.post('/routine', upload.single("img"), uploadSingle, adaptRoute(makeRoutinePostController()));
}
