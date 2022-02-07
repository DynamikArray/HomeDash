var express = require("express");
var router = express.Router();

const thingsRouter = require("./things/routes");

router.use("/things", thingsRouter);

module.exports = router;
