import { config } from 'dotenv';

config();

export default {
    server: {
        port: Number(process.env.SERVER_PORT),
    },
    mongodb: {
        uri: process.env.MONGODB_URI,
    },
    winston: {
        logDir: __dirname + '/../../../logs',
    },
    aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: process.env.AWS_REGION,
        bucket: process.env.AWS_BUCKET_NAME,
        defaultImage: process.env.AWS_DEFAULT_IMAGE
    }
}
