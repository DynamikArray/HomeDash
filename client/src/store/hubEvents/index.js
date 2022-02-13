import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const hubEvents = {
  namespaced: true,
  state: {
    events: [],
  },
  getters: {
    getAllEvents: (state) => {
      if (state.events.length > 0) {
        return state.events;
      }
      return false;
    },
    getMostRecentEvent: (state) => {
      if (state.events.length > 0) {
        return state.events[0];
      }
      return false;
    },
  },
  mutations: {
    SOCKET_HUBEVENT_MESSAGE(state, val) {
      const messages = state.events;
      messages.unshift(val);
      const capped = messages.slice(0, 100);
      state.events = capped;
    },
  },
  actions: {
    /*
    socket_hubEventMessage({ commit }, message) {
      //handle incoming hub messages
      console.log("hubEventMessage = ", message);
      commit("STUF AND THINGS");
    },
    */
  },
};

export default hubEvents;
