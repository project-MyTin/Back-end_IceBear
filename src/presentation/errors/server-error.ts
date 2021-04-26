export class ServerError extends Error {
    constructor(stack: string) {
        super(`Internal server error`);
        this.name = "10001";
        this.stack = stack;
    }
}
