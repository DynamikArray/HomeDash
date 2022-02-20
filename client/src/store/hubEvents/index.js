import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import isEqual from "lodash.isequal";

import { HUBEVENT_MESSAGE_RESULT, UPDATE_DEVICE_FROM_MESSAGE } from "@/store/store.constants.js";

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
    [HUBEVENT_MESSAGE_RESULT](state, val) {
      let counter = 1;
      const messages = [...state.events];

      if (state.events.length > 0) {
        //grab most recent message
        const lastMessage = { ...messages[0] };
        //save counter for later
        let lastMessageCount = lastMessage.counter;
        //delete it
        delete lastMessage.counter;

        //Is last message the same as current
        if (isEqual({ ...lastMessage }, val)) {
          messages[0] = { ...messages[0], counter: lastMessageCount++ };
        } else {
          messages.unshift({ ...val, counter: lastMessageCount });
        }
      }

      if (state.events.length == 0) {
        messages.unshift({ ...val, counter: counter });
      }

      const capped = messages.slice(0, 100);
      state.events = capped;
    },
  },
  actions: {
    socket_hubEventMessage({ commit }, message) {
      commit(`hubEvents/${HUBEVENT_MESSAGE_RESULT}`, message, { root: true });
      commit(`devices/${UPDATE_DEVICE_FROM_MESSAGE}`, message, { root: true });
    },
  },
};

export default hubEvents;
