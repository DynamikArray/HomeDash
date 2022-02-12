const serviceConfigs = {
  hubitatRest: {
    baseURL: "http://192.168.20.10/apps/api/236",
    timeout: 30000,
  },
  hubitatSocket: {
    baseURL: "ws://192.168.20.10/eventsocket",
    emitterPrefix: "hubEvent_",
    events: {
      CONNECT: "connect",
      CONNECT_FAILED: "connectFailed",
      CONNECTION_MESSAGE: "message",
      CONNECTION_CLOSE: "close",
      CONNECTION_ERROR: "error",
    },
  },
};

module.exports = serviceConfigs;
