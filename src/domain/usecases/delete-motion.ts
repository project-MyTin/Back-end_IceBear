export interface DeleteMotion {
    delete:(data: DeleteMotion.Params) => Promise<boolean>;
}

export namespace DeleteMotion {
    export type Params = {
        id: number
    }
}
