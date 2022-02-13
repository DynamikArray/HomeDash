//logger instance
const { logger } = require("../../util/logger");
//hubitat configuration constants
const { emitterPrefix, events } = require("../../config/serviceConfigs").hubitatSocket;

const hubitatEventListeners = (io) => {
  /**
   * [messageHandler description]
   * @param  {[type]} message [description]
   * @return {[type]}         [description]
   */
  async function messageHandler(message) {
    const jsonMsg = JSON.parse(message.utf8Data);
    if (!jsonMsg) /*error handle to JSON?*/ return false;

    //send to all connected clients
    io.emit(emitterPrefix + events.CONNECTION_MESSAGE, jsonMsg);

    //debug logging
    const shortDesc = ` ${jsonMsg.type}, ${jsonMsg.name},  ${jsonMsg.deviceId}, ${jsonMsg.displayName}, ${jsonMsg.value}`;
    logger.debug("socketIndex | CONNECTION_MESSAGE | message | " + shortDesc);
  }

  async function connectSucces() {
    io.emit(emitterPrefix + events.CONNECT);
  }

  async function connectFailed(error) {
    io.emit(emitterPrefix + events.CONNECTION_MESSAGE, error.toString());
  }

  async function connectionClose() {
    io.emit(emitterPrefix + events.CONNECTION_CLOSE);
  }

  async function connectionError(error) {
    io.emit(emitterPrefix + events.CONNECTION_ERROR, error.toString());
  }

  return { messageHandler, connectSucces, connectFailed, connectionClose, connectionError };
};

module.exports = hubitatEventListeners;
