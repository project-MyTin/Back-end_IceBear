import { config } from 'dotenv';

config();

export default {
    server: {
        port: Number(process.env.SERVER_PORT),
    },
}