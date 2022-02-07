const { logger } = require("../../util/logger");

module.exports = (io, em) => {
  io.on("connection", function (socket) {
    logger.info("Speedtest Socket Connection established | socketId=" + socket.id);

    require("./logStream/logStream")(socket, em);
  });
};
