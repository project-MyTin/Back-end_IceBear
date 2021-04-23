import { S3Helper } from "../../presentation/helpers";

export class S3Delete {
    constructor() {}
    async delete(key: string): Promise<boolean> {
        const result = await S3Helper.delete(key);
        return result;
    }
}
