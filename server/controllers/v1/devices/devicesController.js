const { logger } = require("../../../util/logger");
const hubitatRestService = require("../../../services/hubitat/hubitatRestService")();

async function getAllHubitat(req, res, next) {
  try {
    const result = await hubitatRestService.getAllDevices();
    res.send(result);
  } catch (e) {
    //correctly json handle this error message
    logger.error("devicesController | getAllHubitat | error=" + e.message);
  } finally {
    //
  }
}

module.exports = { getAllHubitat };
