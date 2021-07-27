import { createStore } from 'vuex';
import axios from 'axios';
import apiUrl from '@/api';
import { getFullUrl } from '@/api/util';
import type { State } from '@/types/store';
import type { APIRes, ChannelAPIData } from '@/types/api';

export default createStore<State>({
  state: {
    aboutChannelList: [],
    serviceChannelList: [],
    contactChannelList: [],
  },
  mutations: {
    setAboutChannelList(state, list: Array<ChannelAPIData>) {
      state.aboutChannelList = list;
    },
    setServiceChannelList(state, list: Array<ChannelAPIData>) {
      state.serviceChannelList = list;
    },
    setContactChannelList(state, list: Array<ChannelAPIData>) {
      state.contactChannelList = list;
    },
  },
  actions: {
    async getChannel({ commit }) {
      const res1: APIRes = (await axios.get(getFullUrl(apiUrl.channel, {
        code: '001002',
      }))).data;
      if (res1 && res1.isSuccess === 'true' && Array.isArray(res1.obj)) {
        commit('setAboutChannelList', res1.obj);
      }
      const res2: APIRes = (await axios.get(getFullUrl(apiUrl.channel, {
        code: '001004',
      }))).data;
      if (res2 && res2.isSuccess === 'true' && Array.isArray(res2.obj)) {
        commit('setServiceChannelList', res2.obj);
      }
      const res3: APIRes = (await axios.get(getFullUrl(apiUrl.channel, {
        code: '001005',
      }))).data;
      if (res3 && res3.isSuccess === 'true' && Array.isArray(res3.obj)) {
        commit('setContactChannelList', res3.obj);
      }
    },
  },
  modules: {
  },
});
