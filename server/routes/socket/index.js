const { logger } = require("../../util/logger");

//hubitat configuration constants
const { emitterPrefix, events } = require("../../config/serviceConfigs").hubitatSocket;

module.exports = (io, em) => {
  const hubitatEventListeners = require("../../services/hubitatEventListeners")(io);

  io.on("connection", function (socket) {
    logger.info("socketIndex | onConnection | success | socketId =" + socket.id);
    //require any needed socket routing here
  });

  em.on(emitterPrefix + events.CONNECT_FAILED, hubitatEventListeners.connectFailed);
  em.on(emitterPrefix + events.CONNECTION_MESSAGE, hubitatEventListeners.messageHandler);
  em.on(emitterPrefix + events.CONNECTION_CLOSE, hubitatEventListeners.connectionClose);
  em.on(emitterPrefix + events.CONNECTION_ERROR, hubitatEventListeners.connectionError);
};
