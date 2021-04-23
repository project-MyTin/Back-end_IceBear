import AWS from 'aws-sdk';
import env from "../../main/config/env";

const {
    accessKeyId,
    secretAccessKey,
    region,
    bucket
} = env.aws;
const s3 =  new AWS.S3({ accessKeyId, secretAccessKey, region });

export const S3Helper = {
    async delete(key: string): Promise<boolean> {
        s3.deleteObject({ Bucket: bucket, Key: key }, (err, data) => {
            if(err) { return false; }
        });
        return true;
    }

}
