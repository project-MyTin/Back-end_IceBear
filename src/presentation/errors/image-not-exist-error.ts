export class ImageNotExistError extends Error {
    constructor() {
        super(`Image does not exist`);
        this.name = "10002";
    }
}
