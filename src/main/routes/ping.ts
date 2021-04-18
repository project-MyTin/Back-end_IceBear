import { Request, Response, Router } from "express";
import { upload } from '../config/multer';

export default (router: Router): void => {
    router.get('/ping', upload.single('img'), (req:Request,res:Response) => {
        const key = req.file["key"];
        console.log('====================');
        // console.log(req.body.hi);
        if(req.file !== undefined) {
            // res.status(400).json({
            //     message: "image Does not exist."
            // });
        }
        res.status(200).json({
            pong: key
        });
    });
}