var express = require("express");
var router = express.Router();

const devicesController = require("../../../controllers/v1/devices/devicesController");

router.get("/all/hubitat", devicesController.getAllHubitat);

module.exports = router;
