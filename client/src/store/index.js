import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import api from "./api";

export default new Vuex.Store({
  modules: {
    api,
  },
  state: {
    socketStatus: false,
    socketStatusMessage: false,
  },
  getters: {
    getSocketStatus: (state) => {
      return state.socketStatus;
    },
    getSocketStatusMessage: (state) => {
      return state.socketStatusMessage;
    },
  },
  mutations: {
    SOCKET_STATUS(state, val) {
      state.socketStatus = val;
    },
    SOCKET_STATUS_MESSAGE(state, val) {
      state.socketStatusMessage = val;
    },
  },
  actions: {
    socket_connect({ commit }) {
      commit("SOCKET_STATUS", true);
    },
    socket_disconnect({ commit }, reason) {
      commit("SOCKET_STATUS", false);
      commit("SOCKET_STATUS_MESSAGE", reason);
    },
  },
});
