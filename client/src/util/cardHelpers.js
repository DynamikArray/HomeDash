const { DEVICE_TYPES } = require("../constants/devices.constants.js");

const CAPABILITIES = {
  SWITCH: "Switch",
};

function hasCapability(capabilities, capability) {
  return capabilities.includes(capability);
}

function hasSwitchCapability(capabilities) {
  return hasCapability(capabilities, CAPABILITIES.SWITCH);
}

function iconType(val) {
  let iconString = "";

  if (DEVICE_TYPES[val]) {
    iconString = DEVICE_TYPES[val].iconString;
  } else {
    iconString = "fas fa-question-circle";
  }

  return iconString;
}

module.exports = { hasSwitchCapability, iconType };
