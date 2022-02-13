import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { APP_TOGGLE_DRAWER } from "../store.constants";

const app = {
  namespaced: true,
  state: {
    drawer: false,
  },
  getters: {
    getAppDrawer: (state) => {
      return state.drawer;
    },
  },
  mutations: {
    [APP_TOGGLE_DRAWER](state) {
      state.drawer = !state.drawer;
    },
  },
};

export default app;
