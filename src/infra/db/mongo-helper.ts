import mongoose, { Mongoose } from 'mongoose';


export const MongoHelper = {
    client: null as Mongoose,

    async connect(uri: string): Promise<void> {
        try {
            this.client = await mongoose.connect(uri, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
            });
            console.log("Connection successful to MongoDB !!!");
        }
        catch(err) {
            console.log(err);   // 에러 로깅하기
        }
    },

}