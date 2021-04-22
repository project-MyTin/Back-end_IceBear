import mongoose, { Connection, Document, Model } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import { logger } from '../../main/config/winston';

export const MongoHelper = {
    client: null as Connection,

    async connect(uri: string): Promise<void> {
        try {
            this.client = await mongoose.createConnection(uri, { 
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
            autoIncrement.initialize(this.client);
            logger.info("Connection successful to MongoDB !!!");
            console.log("Connection successful to MongoDB !!!");
        }
        catch(err) {
            logger.error(err);
            console.log(err);  // 에러 환경에 따라 콘솔,.log 구분하기
        }
    },

    async loadSchema<T extends Document>(schemaName: string): Promise<Model<T>> {
        return await this.client.model(schemaName, (await import(`./schema/${schemaName}`)).default);
    },

}
