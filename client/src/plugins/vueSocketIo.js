import Vue from "vue";
import store from "../store";

import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";

const socket = io(window.location.host);

Vue.use(VueSocketIOExt, socket, { store });
