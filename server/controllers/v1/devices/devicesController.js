const { logger } = require("../../../util/logger");
const responseService = require("../../../services/responseService");

const hubitatRestService = require("../../../services/hubitat/hubitatRestService")();
const deviceService = require("../../../services/deviceService")();

async function getAllHubitat(req, res, next) {
  try {
    const result = await hubitatRestService.getAllDevices();
    res.send(result);
  } catch (e) {
    logger.error("devicesController | getAllHubitat | error=" + e.message);
    res.send({ error: e.message });
  }
}

async function getAllHomeDashDevices(req, res, next) {
  try {
    const result = await deviceService.getAllDevices();
    res.send(result);
  } catch (e) {
    logger.error("devicesController | getAllHomeDashDevices | error=" + e.message);
    res.send({ error: e.message });
  }
}

async function createDevice(req, res, next) {
  try {
    if (!req.body.device) {
      res.send({ error: "No Device in body payload" });
    } else {
      const device = req.body.device;
      const result = await deviceService.createDevice({ device: device });
      res.send(result);
    }
  } catch (e) {
    logger.error("devicesController | createDevice | error=" + e.message);
    res.send({ error: e.message });
  }
}

module.exports = { getAllHubitat, getAllHomeDashDevices, createDevice };
