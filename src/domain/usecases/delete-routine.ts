export interface DeleteRoutine {
    delete: (data: DeleteRoutine.Params) => Promise<string>;
}

export namespace DeleteRoutine {
    export type Params = {
        id: number
    }
}
