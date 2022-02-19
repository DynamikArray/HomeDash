var express = require("express");
var router = express.Router();

const devicesController = require("../../../controllers/v1/devices/devicesController");

router.get("/all/hubitat", devicesController.getAllHubitat);
router.get("/all/homedash", devicesController.getAllHomeDashDevices);
//crud
router.post("/hd", devicesController.createDevice);
//router.get("/hd/:id", devicesController.getDevice);
//router.put("/hd/:id", devicesController.getAllHubitat);
//router.delete("/hd/:id", devicesController.getAllHubitat);

module.exports = router;
