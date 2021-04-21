import { Router } from "express";
import { adaptRoute } from "../adapters";
import { makeMotionPostController } from "../factories/controllers";

export default (router: Router): void => {
    router.post('/motion', adaptRoute(makeMotionPostController()));
};
