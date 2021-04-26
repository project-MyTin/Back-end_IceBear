import { Request, Response, Router } from "express";
import { MongoHelper } from "../../infra/db/mongo-helper";
import { upload } from '../config/multer';

export default (router: Router): void => {
    router.get('/ping', upload.single('img'), async (req:Request,res:Response) => {
        try {
            // const key = await req.file["key"];
            console.log('====================');
            // console.log(req.body.hi);
            // console.log(req.body.hi);
            if(req.file !== undefined) {
                // res.status(400).json({
                //     message: "image Does not exist."
                // });
            }
            const Motion = await MongoHelper.loadSchema('Motion');
            
            const list = await Motion.find({});
            res.status(200).json({
                // pong: key,
                pong2: list
            });    
        } catch (err) {
            console.log(err);
        }
        
    });
}