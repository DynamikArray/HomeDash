import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import {
  MAKE_API_CALL,
  FETCH_DEVICES_HUBITAT,
  FETCH_DEVICES_HUBITAT_LOADING,
  FETCH_DEVICES_HUBITAT_RESULTS,
  CREATE_DEVICE_HD,
  CREATE_DEVICE_HD_LOADING,
  CREATE_DEVICE_HD_RESULTS,
} from "../store.constants";

const devices = {
  namespaced: true,
  state: {
    hubitatLoading: false,
    hubitatDevices: [],
    homedashLoading: false,
    homedashDevices: [],
  },
  getters: {
    getHubitatLoading: (state) => {
      return state.hubitatLoading;
    },
    getHubitatDevices: (state) => {
      return state.hubitatDevices;
    },
  },
  mutations: {
    [FETCH_DEVICES_HUBITAT_LOADING](state, { loading }) {
      state.hubitatLoading = loading;
    },
    [FETCH_DEVICES_HUBITAT_RESULTS](state, results) {
      state.hubitatDevices = results;
    },
    [CREATE_DEVICE_HD_LOADING](state, { loading }) {
      state.homedashLoading = loading;
    },
    [CREATE_DEVICE_HD_RESULTS](state, results) {
      state.homedashDevices = { ...state.homedashDevices, ...results };
    },
  },
  actions: {
    async [FETCH_DEVICES_HUBITAT]({ dispatch, commit }) {
      const result = await dispatch(
        `api/${MAKE_API_CALL}`,
        {
          method: "get",
          url: "/devices/all/hubitat",
          loading: `devices/${FETCH_DEVICES_HUBITAT_LOADING}`,
        },
        { root: true }
      );
      if (result.data) commit(`devices/${FETCH_DEVICES_HUBITAT_RESULTS}`, result.data, { root: true });
    },

    async [CREATE_DEVICE_HD]({ dispatch, commit }, device) {
      const result = await dispatch(
        `api/${MAKE_API_CALL}`,
        {
          method: "post",
          url: "/devices/hd",
          params: { hubitat: device },
          loading: `devices/${CREATE_DEVICE_HD_LOADING}`,
        },
        { root: true }
      );
      if (result.data) commit(`devices/${CREATE_DEVICE_HD_RESULTS}`, result.data, { root: true });
    },
  },
};

export default devices;
