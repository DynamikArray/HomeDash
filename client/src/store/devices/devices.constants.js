const ACTION_TYPES = {
  //HUBITAT DEVICES
  FETCH_DEVICES_HUBITAT: "FETCH_DEVICES_FROM_HUBITAT",
  //CRUD HOME DASH DEVICES
  CREATE_DEVICE_HD: "CREATE_DEVICE_HD",
};

//actions
const MUTATION_TYPES = {
  //HUBITAT DEVICES
  FETCH_DEVICES_HUBITAT_LOADING: "FETCH_DEVICES_HUBITAT_LOADING",
  FETCH_DEVICES_HUBITAT_RESULTS: "FETCH_DEVICES_HUBITAT_RESULTS",
  //CRUD HOME DASH DEVICES
  CREATE_DEVICE_HD_LOADING: "CREATE_DEVICE_HD_LOADING",
  CREATE_DEVICE_HD_RESULTS: "CREATE_DEVICE_HD_RESULTS",
};

module.exports = { ACTION_TYPES, MUTATION_TYPES };
