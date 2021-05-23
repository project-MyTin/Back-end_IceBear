import { Router } from "express";
import { adaptRoute } from "../adapters";
import { makeRoutinePostController } from "../factories";

export default (router: Router): void => {
    router.post('/routine', adaptRoute(makeRoutinePostController()));
}
