/* eslint-disable */
// API 相关路径映射类型
export interface APIUrl {
    [key: string]: string;
}

// API 相关结果类型
export interface APIRes {
    isSuccess?: string,
    obj?: any,
}

// 频道API数据类型
export interface ChannelAPIData {
    dicId?: string,
    channelId?: string,
    channelCode?: string,
    channelEnName?: string,
    channelName?: string,
    channelStatus?: string,
    channelType?: string,
    url?: string,
    isNewRecord?: boolean,
}
