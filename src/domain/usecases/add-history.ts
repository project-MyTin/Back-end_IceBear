export interface AddHistory {
    add: (data:AddHistory.Params) => Promise<void>;
}

export namespace AddHistory {
    export type Params = {
        id: string,
        total_time: number,
    }
}