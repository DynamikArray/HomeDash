//websocket client
const WebSocketClient = require("websocket").client;

//utils
const { logger } = require("../../util/logger");
const { em } = require("../../services/EventEmitterService");

//Hubitat Config
const { baseURL, emitterPrefix, events } = require("../../config/serviceConfigs").hubitatSocket;

const hubitatSocketService = () => {
  //Main message handler
  function connectionMessage(message) {
    if (message.type === "utf8") {
      em.emit(emitterPrefix + events.CONNECTION_MESSAGE, message);
    } else {
      logger.info("hubitatSocketService | connectionMessage | error=No uft8 Message Type | message=" + message);
    }
  }

  //conneciton close handler
  function connectionClose() {
    em.emit(emitterPrefix + events.CONNECTION_CLOSE);
    logger.info("hubitatSocketService | connectionClose");
  }

  //connection error handler
  function connectionError(error) {
    em.emit(emitterPrefix + events.CONNECTION_ERROR, error);
    logger.error("hubitatSocketService | connectionError | error=" + error.toString());
  }

  //client connection error
  function clientConnectFailed(error) {
    em.emit(emitterPrefix + events.CONNECT_FAILED, error);
    logger.error("hubitatSocketService | clientConnectFailed | error=" + error.toString());
  }

  //client connection handlers
  function clientConnected(connection) {
    connection.on(events.CONNECTION_ERROR, connectionError);
    connection.on(events.CONNECTION_CLOSE, connectionClose);
    connection.on(events.CONNECTION_MESSAGE, connectionMessage);
    em.emit(emitterPrefix + events.CONNECT);
    logger.info("hubitatSocketService | clientConnected | success=Websocket client connected to hubitatHub");
  }

  //create new client and add handlers
  const client = new WebSocketClient();
  client.on(events.CONNECT_FAILED, clientConnectFailed);
  client.on(events.CONNECT, clientConnected);
  client.connect(baseURL);

  //return this instance
  return client;
};

module.exports = hubitatSocketService;
