const { logger } = require("../util/logger");
const Device = require("../models/deviceSchema");

const deviceService = () => ({
  //Index route gets all saved HomeDash Devices
  getAllDevices: async (device) => {
    try {
      const filter = {};
      const allDevices = await Device.find(filter);
      return { result: allDevices };
    } catch (e) {
      logger.error("deviceService | getAllDevices | error=" + e.message);
      return { error: e.message };
    }
  },

  //C - Create Device
  createDevice: async (newDevice) => {
    try {
      const deviceSaveResult = await Device.findOneAndUpdate(
        { "device.id": newDevice.device.id },
        { device: newDevice.device },
        { new: true, upsert: true }
      );
      if (deviceSaveResult) return { result: deviceSaveResult };
      return { result: deviceSaveResult };
    } catch (e) {
      logger.error("deviceService | createDevice | error=" + e.message);
      return { error: e.message };
    }
  },
});

module.exports = deviceService;
