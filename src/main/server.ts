import env from './config/env';
import { MongoHelper } from '../infra/db/mongo-helper';

MongoHelper.connect(env.mongodb.uri)
    .then(async() => {
            const app = (await import('./config/app')).default;
            app.listen(env.server.port, () => console.log(`server open on ${env.server.port} !!!`));
        }
    )
    .catch(console.error);
