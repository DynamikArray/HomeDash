import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import { APP_TOGGLE_DRAWER, APP_DRAWER_TAB } from "../store.constants";

const app = {
  namespaced: true,
  state: {
    drawer: false,
    drawerTab: 0,
  },
  getters: {
    getAppDrawer: (state) => {
      return state.drawer;
    },
    getAppDrawerTab: (state) => {
      return state.drawerTab;
    },
  },
  mutations: {
    [APP_TOGGLE_DRAWER](state) {
      state.drawer = !state.drawer;
    },
    [APP_DRAWER_TAB](state, tab) {
      state.drawerTab = tab;
    },
  },
};

export default app;
