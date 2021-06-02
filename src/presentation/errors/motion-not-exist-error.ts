export class MotionNotExistError extends Error {
    constructor() {
        super(`Motion doesn't exist`);
        this.name = "10001";
    }
}
