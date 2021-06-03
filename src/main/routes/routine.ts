import { Router } from "express";
import { adaptRoute } from "../adapters";
import { upload } from "../config/multer";
import { makeRoutineDeleteController, makeRoutineGetController, makeRoutinePostController, makeRoutinePutController, makeRoutineRecordController, makeRoutineSearchController } from "../factories";
import { uploadSingle } from "../middlewares";
import { uploadSingleUpdate } from "../middlewares/upload-single-update";

export default (router: Router): void => {
    router.post('/routine', upload.single("img"), uploadSingle, adaptRoute(makeRoutinePostController()));
    router.put('/routine/:id', upload.single("img"), uploadSingleUpdate, adaptRoute(makeRoutinePutController()));
    router.delete('/routine/:id', adaptRoute(makeRoutineDeleteController()));
    router.get('/routine/detail/:id', adaptRoute(makeRoutineGetController()));
    router.get('/routine', adaptRoute(makeRoutineSearchController()));
    router.post('/routine/record',adaptRoute(makeRoutineRecordController()));
}
