const { logger } = require("../util/logger");
const Device = require("../models/deviceSchema");

const deviceService = () => ({
  //C - Create Device
  createDevice: async (device) => {
    try {
      const newDevice = new Device(device);
      const deviceSaveResult = await newDevice.save();
      if (deviceSaveResult) return { result: deviceSaveResult };
      return { result: deviceSaveResult };
    } catch (e) {
      logger.error("deviceService | createDevice | error=" + e.message);
      return { error: e.message };
    }
  },
});

module.exports = deviceService;
