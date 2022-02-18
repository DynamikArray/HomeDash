const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
  timestamp: {
    type: String,
    required: false,
  },
  attributes: {
    type: Object,
    require: false,
  },
  capabilities: {
    type: Array,
    require: false,
  },
  commands: {
    type: Array,
    require: false,
  },
  date: {
    type: String,
    require: false,
  },
  id: {
    type: String,
    require: false,
  },
  label: {
    type: String,
    require: false,
  },
  manufacturer: {
    type: String,
    require: false,
  },
  model: {
    type: String,
    require: false,
  },
  name: {
    type: String,
    require: false,
  },
  type: {
    type: String,
    require: false,
  },
});

//Make this collection singular later?
const Device = mongoose.model("Device", DeviceSchema);

module.exports = Device;
