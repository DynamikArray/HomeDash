const CAPABILITIES = {
  SWITCH: "Switch",
};

const hasCapability = (capabilities, capability) => {
  return capabilities.includes(capability);
};

const hasSwitchCapability = (capabilities) => {
  return hasCapability(capabilities, CAPABILITIES.SWITCH);
};

module.exports = { hasSwitchCapability };
