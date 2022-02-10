const apiConstants = require("./api/api.constants.js");
const devicesConstants = require("./devices/devices.constants.js");

const ACTION_TYPES = {
  ...apiConstants.ACTION_TYPES,
  ...devicesConstants.ACTION_TYPES,
};

const MUTATION_TYPES = {
  ...apiConstants.MUTATION_TYPES,
  ...devicesConstants.MUTATION_TYPES,
};

module.exports = { ...ACTION_TYPES, ...MUTATION_TYPES };
