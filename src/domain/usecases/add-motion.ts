export interface AddMotion {
    add:(data: AddMotion.Params) => Promise<void>; // return 값 바뀔 수 있음. 
}

export namespace AddMotion {
    export type Params = {
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