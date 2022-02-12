const axios = require("axios");
const serviceConfigs = require("../config/serviceConfigs");

//Create axios instance with default configs
const axiosHubitat = axios.create({ ...serviceConfigs.hubitatRest });

//Set up axios instance with default params
axiosHubitat.defaults.params = {};
axiosHubitat.defaults.params["access_token"] = process.env.HUBITAT_ACCESS_TOKEN;

module.exports = axiosHubitat;
