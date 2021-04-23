export interface DeleteMotion {
    delete:(data: DeleteMotion.Params) => Promise<string>;
}

export namespace DeleteMotion {
    export type Params = {
        id: number
    }
}
