import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import {
  MAKE_API_CALL,
  FETCH_DEVICES_HUBITAT,
  FETCH_DEVICES_HUBITAT_LOADING,
  FETCH_DEVICES_HUBITAT_RESULTS,
  FETCH_DEVICES_HD,
  FETCH_DEVICES_HD_LOADING,
  FETCH_DEVICES_HD_RESULTS,
  CREATE_DEVICE_HD,
  CREATE_DEVICE_HD_LOADING,
  UPDATE_DEVICE_FROM_MESSAGE,
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
    getHomedashDevices: (state) => {
      return state.homedashDevices;
    },
    getHubitatDevicesAsArray: (state) => {
      return Object.keys(state.hubitatDevices).reduce((acc, device) => {
        acc.push(state.hubitatDevices[device]);
        return acc;
      }, []);
    },
    getDevices: (state) => {
      const hub = state.hubitatDevices;
      const dash = state.homedashDevices;

      if (Object.keys(hub).length > 0 && dash.length > 0) {
        dash.forEach((device, index) => {
          dash[index].hubitat = hub[device.hubitat.id];
        });
        return dash;
      }
      return dash;
    },
  },
  mutations: {
    [FETCH_DEVICES_HUBITAT_LOADING](state, { loading }) {
      state.hubitatLoading = loading;
    },
    [FETCH_DEVICES_HUBITAT_RESULTS](state, results) {
      const devices = results.reduce((acc, device) => {
        acc[device.id] = device;
        return acc;
      }, {});
      state.hubitatDevices = devices;
    },
    [FETCH_DEVICES_HD_LOADING](state, { loading }) {
      state.homedashLoading = loading;
    },
    [FETCH_DEVICES_HD_RESULTS](state, { results }) {
      state.homedashDevices = results;
    },
    //CRUD
    [CREATE_DEVICE_HD_LOADING](state, { loading }) {
      state.homedashLoading = loading;
    },
    /*
    [CREATE_DEVICE_HD_RESULTS](state, { result }) {
      const devices = state.homedashDevices;
      devices.push(result);
      //state.homedashDevices = devices;
    },
    */
    [UPDATE_DEVICE_FROM_MESSAGE](state, message) {
      const curDevice = state.hubitatDevices[message.deviceId];
      if (message.name == "switch") {
        curDevice.attributes.switch = message.value;
      }
      state.hubitatDevices[message.deviceId] = curDevice;
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

    async [FETCH_DEVICES_HD]({ dispatch, commit }) {
      const result = await dispatch(
        `api/${MAKE_API_CALL}`,
        {
          method: "get",
          url: "/devices/all/homedash",
          loading: `devices/${FETCH_DEVICES_HD_LOADING}`,
        },
        { root: true }
      );
      if (result.data) commit(`devices/${FETCH_DEVICES_HD_RESULTS}`, result.data, { root: true });
    },

    async [CREATE_DEVICE_HD]({ dispatch }, device) {
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
      if (result.data) {
        dispatch(`devices/${FETCH_DEVICES_HD}`, {}, { root: true });
        //commit(`devices/${CREATE_DEVICE_HD_RESULTS}`, result.data, { root: true });
        //
      }
    },
  },
};

export default devices;
