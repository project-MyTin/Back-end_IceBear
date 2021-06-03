export interface UpdateMotion {
    update:(data: UpdateMotion.Params) => Promise<boolean>;
}

export namespace UpdateMotion {
    export type Params = {
        id: string,
        file?: string,
        name?: string,
        time?: number,   // 정수로 변환
        description?: string,
        type?: string,
        parts?: string[],
        difficulty?: string,
        url?: string
    }
}
