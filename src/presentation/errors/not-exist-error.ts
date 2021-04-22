export class NotExistError extends Error {
    constructor() {
        super(`It doesn't exist`);
        this.name = "10001";
    }
}