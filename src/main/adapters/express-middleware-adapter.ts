import { NextFunction, Request, Response } from "express";
import { Middleware } from "../../presentation/protocols";

export const adaptMiddleware = (middleware: Middleware) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const request = {
            ...(req.headers || {}),
            ...('file' in req ? { key: req.file["key"] } : {})
        };
        const httpResponse = await middleware.handle(request);
        const { status, statusCode, message, data } = httpResponse;
        if(200 === status) {
            req.body.mid = {
                ...(req.body.mid || {}),
                ...data
            };
            next();
        } else {
            res.status(status).json({ statusCode, error: message });
        }
    }
}