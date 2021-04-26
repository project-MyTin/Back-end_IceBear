export interface LoadMotion {
    load:(data: LoadMotion.Params) => Promise<LoadMotion.Result>
}

export namespace LoadMotion {
    export type Params = {
        id: string,
    }
    export type Result = {
        file: string,
        name: string,
        time: number,   // 정수로 변환
        description: string,
        type: string,
        parts: string[],
        difficulty: string,
        url: string
    }
}