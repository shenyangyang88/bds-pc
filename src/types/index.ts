/* eslint-disable */
// 菜单相关类型
export interface Menu {
    id: number,
    name: string,
    enName: string,
    url?: string,
    children?: Array<{
        id: number,
        name: string,
        url?: string,
    }>
}