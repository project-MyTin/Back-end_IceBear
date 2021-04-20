import mongoose, { Connection, Document, Model, Mongoose } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

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

            console.log("Connection successful to MongoDB !!!");
            // const Motion = this.client.model('Motion', MotionSchema);
            
            // const input = new Motion({
            //     motion_id: 987654321,
            //     file: 'test file222',
            //     name: 'test name222',
            //     time: 1,
            //     parts: ['test part222','hahahahahaha']
            // });
            // await input.save();
            // console.log(input);
            // const result = await Motion.find({});
            // console.log(result);
            // User.findById();// ex)
            // 클래스 만들기 => 스키마 정의파일에서 윗줄처럼 사용가능하도록 빼주기
            // 클래스에서 생성자로 conn 받기 => 그래야 각 파일에서 모듈로 보내줄 수 있을 것이다.
            // this.client = await mongoose.connect(uri, {
            //     useNewUrlParser: true,
            //     useCreateIndex: true,
            //     useUnifiedTopology: true,
            // });
            
        }
        catch(err) {
            console.log(err);   // 에러 로깅하기
        }
    },

    async loadSchema<T extends Document>(schemaName: string): Promise<Model<T>> {
        return await this.client.model(schemaName, (await import(`./schema/${schemaName}`)).default);
    },

}
