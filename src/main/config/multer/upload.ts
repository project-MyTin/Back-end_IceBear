import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';
import env from '../env';

const { 
    accessKeyId,
    secretAccessKey,
    region,
    bucket
} = env.aws;

const s3 = new AWS.S3({ accessKeyId, secretAccessKey, region });

const storage = multerS3({
    s3, bucket,
    key: (req, file, cb) => {
        cb(null,`upload/${Date.now()}_${file.originalname}`)
    },
    acl: 'public-read-write',
});

export const upload = multer({ storage });
