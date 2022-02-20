const { logger } = require("../../util/logger");
const axiosHubitat = require("../../util/axiosHubitat");

const hubitatRestService = () => ({
  getAllDevices: async () => {
    try {
      const results = await axiosHubitat.get("/devices/all");
      if (results) {
        return results.data;
      }
      return { results: false };
    } catch (e) {
      logger.error("hubitatService | getAllDevices | error=" + e.message);
      return { error: e.message };
    }
  },

  sendCommand: async (deviceId, { command }) => {
    try {
      const url = `/devices/${deviceId}/${command}`;
      const results = await axiosHubitat.get(`/devices/${deviceId}/${command}`);
      if (results) {
        return results.data;
      }
      return { results: false };
    } catch (e) {
      logger.error("hubitatService | sendCommand | error=" + e.message);
      return { error: e.message };
    }
  },
});

module.exports = hubitatRestService;
