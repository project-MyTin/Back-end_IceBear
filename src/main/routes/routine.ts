import { Router } from "express";
import { adaptRoute } from "../adapters";
import { upload } from "../config/multer";
import { makeRoutineDeleteController, makeRoutinePostController, makeRoutinePutController } from "../factories";
import { uploadSingle } from "../middlewares";
import { uploadSingleUpdate } from "../middlewares/upload-single-update";

export default (router: Router): void => {
    router.post('/routine', upload.single("img"), uploadSingle, adaptRoute(makeRoutinePostController()));
    router.put('/routine/:id', upload.single("img"), uploadSingleUpdate, adaptRoute(makeRoutinePutController()));
    router.delete('/routine/:id', adaptRoute(makeRoutineDeleteController()));
}
