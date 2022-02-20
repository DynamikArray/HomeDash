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
    if (!req.body.hubitat) {
      res.send({ error: "No Hubitat in body payload" });
    } else {
      const hubitat = req.body.hubitat;
      const result = await deviceService.createDevice({ hubitat });
      res.send(result);
    }
  } catch (e) {
    logger.error("devicesController | createDevice | error=" + e.message);
    res.send({ error: e.message });
  }
}

async function sendCommand(req, res, next) {
  try {
    //we need device id from route, and payload from body
    const payload = req.body.payload;
    const deviceId = req.params.deviceId;
    const result = await hubitatRestService.sendCommand(deviceId, payload);
    res.send(result);
  } catch (e) {
    logger.error("devicesController | sendCommand | error=" + e.message);
    res.send({ error: e.message });
  }
}

module.exports = { getAllHubitat, getAllHomeDashDevices, createDevice, sendCommand };
