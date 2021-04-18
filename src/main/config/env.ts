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
    }
}