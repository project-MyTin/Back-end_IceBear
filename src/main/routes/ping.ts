import { Request, Response, Router } from "express";

export default (router: Router): void => {
    router.get('/ping', (req:Request,res:Response) => {
        res.status(200).json({
            pong:"pong"
        });
    });
}