import { S3Delete } from "../../../data/S3";

export const makeS3Delete = (): S3Delete => {
    return new S3Delete();
}
