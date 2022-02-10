const { logger } = require("../util/logger");
const axiosHubitat = require("../util/axiosHubitat");

const hubitatService = () => ({
  getAllDevices: async () => {
    try {
      const results = await axiosHubitat.get("/devices/all");

      if (results) {
        return results.data;
        /*   To create an indexed by id object
        return results.data.reduce((acc, result) => {
          acc[result.id] = result;
          return acc;
        }, {});
        */
      }
      return { results: false };
    } catch (e) {
      logger.error("hubitatService | getAllDevices | error=" + e.message);
      return { error: e.message };
    } finally {
      //
    }
  },
});

module.exports = hubitatService;
