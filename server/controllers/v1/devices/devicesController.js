const { logger } = require("../../../util/logger");
const hubitatService = require("../../../services/hubitatService")();

async function getAllHubitat(req, res, next) {
  try {
    const result = await hubitatService.getAllDevices();
    res.send(result);
  } catch (e) {
    //correctly json handle this error message
    logger.error("devicesController | getAllHubitat | error=" + e.message);
  } finally {
    //
  }
}

module.exports = { getAllHubitat };
