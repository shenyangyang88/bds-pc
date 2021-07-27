/* eslint-disable */
import type { ChannelAPIData } from '../api';

// State 相关类型
export interface State {
    aboutChannelList: Array<ChannelAPIData>,
    serviceChannelList: Array<ChannelAPIData>,
    contactChannelList: Array<ChannelAPIData>,
}
