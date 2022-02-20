const { logger } = require("../util/logger");
const Device = require("../models/deviceSchema");

const deviceService = () => ({
  //Index route gets all saved HomeDash Devices
  getAllDevices: async (device) => {
    try {
      const filter = {};
      const allDevices = await Device.find(filter);
      return { results: allDevices };
    } catch (e) {
      logger.error("deviceService | getAllDevices | error=" + e.message);
      return { error: e.message };
    }
  },

  //C - Create Device
  createDevice: async (newDevice) => {
    try {
      const deviceSaveResult = await Device.findOneAndUpdate(
        { "hubitat.id": newDevice.hubitat.id },
        { hubitat: newDevice.hubitat },
        { new: true, upsert: true }
      );
      if (deviceSaveResult) return { results: deviceSaveResult };
      return { results: deviceSaveResult };
    } catch (e) {
      logger.error("deviceService | createDevice | error=" + e.message);
      return { error: e.message };
    }
  },
});

module.exports = deviceService;