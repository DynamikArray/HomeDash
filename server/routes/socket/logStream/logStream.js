module.exports = async (socket, em) => {
  socket.emit("eventFromSpeedTest?");
};
