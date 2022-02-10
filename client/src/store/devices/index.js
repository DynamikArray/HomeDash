import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import {
  MAKE_API_CALL,
  FETCH_DEVICES_HUBITAT,
  FETCH_DEVICES_HUBITAT_LOADING,
  FETCH_DEVICES_HUBITAT_RESULTS,
} from "../store.constants";

const devices = {
  namespaced: true,
  state: {
    hubitatLoading: false,
    hubitatDevices: [],
  },
  getters: {
    getHubitatLoading: (state) => {
      return state.hubitatLoading;
    },
    getHubitatResults: (state) => {
      return state.hubitatResults;
    },
  },
  mutations: {
    [FETCH_DEVICES_HUBITAT_LOADING](state, { loading }) {
      state.hubitatLoading = loading;
    },
    [FETCH_DEVICES_HUBITAT_RESULTS](state, results) {
      state.hubitatDevices = results;
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
  },
};

export default devices;
