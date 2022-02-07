var express = require("express");
var router = express.Router();

const thingsController = require("../../../controllers/v1/things/thingsController");

router.get("/", thingsController.home);

module.exports = router;
