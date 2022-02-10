var express = require("express");
var router = express.Router();

const devicesRouter = require("./devices/routes");

router.use("/devices", devicesRouter);

module.exports = router;
